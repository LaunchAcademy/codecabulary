#!/usr/bin/env ruby
require 'rubygems'
require 'gollum/app'

require 'omnigollum'
require 'omniauth/strategies/github'

require 'dotenv'
Dotenv.load

options = {
  # OmniAuth::Builder block is passed as a proc
  :providers => Proc.new do
    provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
  end,
  :dummy_auth => false
}

options[:authorized_users] = ENV["codecabulary_authorized_users"].split(",")

# :omnigollum options *must* be set before the Omnigollum extension is registered
Precious::App.set(:omnigollum, options)

gollum_path = File.expand_path(File.dirname(__FILE__)) # CHANGE THIS TO POINT TO YOUR OWN WIKI REPO
Precious::App.set(:gollum_path, gollum_path)
Precious::App.set(:default_markup, :markdown) # set your favorite markup language
Precious::App.set(:wiki_options, {
  :universal_toc => false,
  :live_preview  => false
})

Precious::App.register Omnigollum::Sinatra

run Precious::App

