class BusStop
  def initialize(name)
    @name = name
    @queue = Array.new()
  end

  def name
    return @name
  end

  def number_waiting
    @queue.count
  end

  def join_queue(passenger)
    @queue << passenger
  end

end
