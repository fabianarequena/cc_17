// Task 1: Created Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`New customer created: ${this.name}`);
    }
  
    // Adds a purchase to the customer's history
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // Calculates total amount spent
    getTotalSpent() {
      return this.purchaseHistory.reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  // Create a customer and log total spent
  const customer1 = new Customer("Fabiana", "fabiana@usf.edu");
  customer1.addPurchase(120);
  customer1.addPurchase(80);
  console.log(`${customer1.name}'s Total Spent: $${customer1.getTotalSpent()}`);


// Task 2: Created Sales Rep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    // Add a customer object to the clients list
    addClient(customer) {
      this.clients.push(customer);
    }
  
    // Find a customer by name and return their total spent
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Create sales rep and add clients
  const rep = new SalesRep("Aanika");
  rep.addClient(customer1);
  console.log(`${rep.name}'s Clients:`, rep.clients.map(c => c.name));
  console.log(`Total spent by Fabiana: $${rep.getClientTotal("Fabiana")}`);

  