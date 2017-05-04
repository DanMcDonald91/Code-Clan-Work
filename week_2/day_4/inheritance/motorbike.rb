require_relative("../vehicle")

class Motorbike < Vehicle

  def drive()
    return super() + "Brrrm! I'm a motorbike"
end

end
