require('pg')

class Pizzaorder

  attr_accessor :topping, :quantity, :customer_id

  def initialize (options)

    @id = options['id'].to_i
    @topping = options["topping"]
    @quantity = options['quantity'].to_i
    @customer_id = options['customer_id'].to_i
end

def save()
  db = PG.connect({ dbname: 'pizza_shop' , host: 'localhost'})
  sql = "INSERT INTO pizza_orders (topping, quantity, customer_id) VALUES ('#{@topping}', #{@quantity}, #{@customer_id}) returning *"
  @id = db.exec(sql).first["id"].to_i
  db.close
end

def self.all()
  db = PG.connect({dbname: 'pizza_shop' , host: 'localhost'})
  sql = "SELECT * FROM pizza_orders;"
  orders = db.exec(sql)
  db.close
 return orders.map { |order| Pizzaorder.new(order) }
end

def self.delete_all()
  db = PG.connect({dbname: "pizza_shop , host: 'localhost"})
  sql = "DELETE FROM pizza_orders;"
  db.exec(sql)
  db.close
end

def delete()
  db = PG.connect({dbname: "pizza_shop" , host: "localhost"})
  sql = "DELETE FROM pizza_orders WHERE id = #{@id};"
  db.exec(sql)
  db.close
end

def update()
  db = PG.connect({dbname: "pizza_shop" , host: "localhost"})
  sql = "UPDATE pizza_orders SET (first_name, last_name, topping, quantity) ='#{@topping}', #{@customer_id}, #{@quantity}) WHERE id = #{@id};"
  'SELECT * FROM pizza_orders;'
  db.exec(sql)
  db.close


end

def customer()
  sql = "SELECT * FROM customers where id = #{@customer_id}"
  customer = SqlRunner.run(sql).first
  result = Customer.new(customer)
  return result
end


end