source 'https://rubygems.org'

ruby '2.1.2'

gem 'rails', '6.0.3.5'
gem 'pry-rails'
gem 'pg'
gem 'bcrypt', require: 'bcrypt'
gem 'friendly_id', '>= 5.1.0'
gem 'sass-rails', '~> 5.0', '>= 5.0.8'
gem 'bootstrap-sass'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails', '>= 4.0.5'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
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
  gem 'annotate', '>= 2.7.0'
  gem 'dotenv-rails', '>= 2.7.0'
  gem 'spring'
end
