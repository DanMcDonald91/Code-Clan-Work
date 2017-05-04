require "minitest/autorun"
require "minitest/rg"
require_relative"../car"

class TestCar < Minitest::Test

  def setup
    @car = Car.new
  end

  def test_drive
    assert_equal("Brrrm! I'm a car", @car.drive())
  end

end
