require('pg')

class SpaceBounty
  def initialize( options)
@id = options['id'] if options['id'] !=nil   
@name = options['name']
@species = options['species']
@homeworld = options['homeworld']
@cashed_in = options['cashed_in']
 end

 def save()
    db = PG.connect({ dbname: 'space_bounties' , host: 'localhost'})
    sql = "INSERT INTO bounties (name, species, homeworld, cashed_in) VALUES ('#{@name}', '#{@species}', '#{@homeworld}', #{@cashed_in}) returning *;"
    @id = db.exec(sql).first["id"].to_i
    db.close
    return " You have saved your database"
  end




def self.all()
    db = PG.connect({dbname: 'space_bounties' , host: 'localhost'})
    sql = "SELECT * FROM bounties;"
    bounties = db.exec(sql)
    db.close
   return bounties.map { |bounty| SpaceBounty.new(bounty) }
  end

  def self.delete_all()
  db = PG.connect({dbname: "space_bounties" , host: "localhost"})
  sql = "DELETE FROM bounties;"
  db.exec(sql)
  db.close
  end

def update 
  db = PG.connect({dbname: "space_bounties" , host: "localhost"})
  sql = "UPDATE bounties SET (name, species, homeworld, cashed_in) = '#{@name}', '#{@species}', '#{@homeworld}', #{@cashed_in}) WHERE id=#{@id};"
  db exec(sql)
  db.close
end

def


  #class methods
  



  def self.delete_all()

  end
end
