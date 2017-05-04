require "minitest/autorun"
require "minitest/rg"
require_relative"../person"

class TestPerson < Minitest::Test

  def setup
    @person = Person.new("Daniel", "McDonald")
  end

  def test_talk
    assert_equal("My name is Daniel", @person.talk)
end
end
