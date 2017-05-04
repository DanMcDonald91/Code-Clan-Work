require "minitest/autorun"
require "minitest/rg"

require_relative"../medic"

class TestMedic < Minitest::Test

  def setup
    @person = Person.new("Daniel", "McDonald")
  end

  def