require( 'minitest/autorun')
require( 'minitest/rg')

require_relative('./functions.rb')

class FunctionsTest < MiniTest::Test
def test_multiply()
  expected_value = 18
  output_value = multiply(3,6)
  asset_equal( expected_value, output_value)
end
end
