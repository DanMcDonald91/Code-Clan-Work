require('minitest/autorun')
require ('minitest/rg')
require_relative('../Bus_stop')
require_relative('../Person')

class TestBusStop < MiniTest::Test
  def setup
    @bus_stop1 = BusStop.new("Harthill Services")
    @passenger1 = Person.new("Jeff", 50)
    @passenger2 = Person.new("Llyod", 20)
  end

  def test_bus_stop_one
    assert_equal("Harthill Services" , @bus_stop1.name)
end

def test_que_is_empty
  assert_equal(0,@bus_stop1.number_waiting())
end

def test_add_to_queue
  @bus_stop1.join_queue(@passenger1)
  @bus_stop1.join_queue(@passenger2)
  assert_equal(2, @bus_stop1.number_waiting())
end
end
