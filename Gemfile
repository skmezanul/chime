source 'https://rubygems.org'

ruby '2.1.2'

gem 'rails', '5.2.4.2'
gem 'pry-rails'
gem 'pg'
gem 'bcrypt', require: 'bcrypt'
gem 'friendly_id', '>= 5.1.0'
gem 'sass-rails', '~> 5.0', '>= 5.0.5'
gem 'bootstrap-sass', '>= 3.3.6'
gem 'uglifier', '>= 2.7.2'
gem 'jquery-rails', '>= 4.0.5'
gem 'jbuilder', '~> 2.3', '>= 2.3.2'
gem 'sdoc', '~> 1.0.0', group: :doc
gem 'puma'
gem 'rails_12factor', group: :production
gem 'newrelic_rpm'
gem 'rack-timeout'
gem 'rmagick'
gem 'aws-sdk'

# Paperclip to handle pass-through image uploads.
# Paperclip 4 does not work with AWS SDK v2; must use this revision:
gem 'paperclip',
  git: 'https://github.com/thoughtbot/paperclip',
  ref: '523bd46c768226893f23889079a7aa9c73b57d68'

group :development, :test do
  gem 'byebug'
end

group :development do
  gem 'web-console', '~> 2.2', '>= 2.2.1'
  gem 'binding_of_caller'
  gem 'better_errors'
  gem 'annotate', '>= 2.6.10'
  gem 'dotenv-rails', '>= 2.2.2'
  gem 'spring'
end
