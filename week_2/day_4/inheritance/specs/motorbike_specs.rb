require "minitest/autorun"
require "minitest/rg"
require_relative"../motorbike"

class TestMotorbike < Minitest::Test

  def setup
    @motorbike = Motorbike.new
  end

  def test_drive
    assert_equal("Brrrm! i'm a motorbike", @motorbike.drive())
  end

end
