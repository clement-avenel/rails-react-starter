FROM ruby:3.1.2

WORKDIR /app

ENV RAILS_ENV=production \
    BUNDLE_WITHOUT=development \
    REDIS_URL=redis://redis:6360

RUN apt-get update -qq && apt-get install -y postgresql-client
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

COPY . .
RUN gem install bundler && bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]