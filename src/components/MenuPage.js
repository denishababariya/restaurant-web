import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaLeaf, FaFish, FaBreadSlice, FaCocktail, FaUtensils, FaCheese, FaCookieBite, FaWineGlassAlt, FaInfoCircle } from 'react-icons/fa';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [searchTerm, setSearchTerm] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState([]);
  const [cart, setCart] = useState([]);

  // Sample menu data
  const menuCategories = [
    { id: 'starters', name: 'Starters', icon: <FaCheese /> },
    { id: 'main-courses', name: 'Main Courses', icon: <FaUtensils /> },
    { id: 'desserts', name: 'Desserts', icon: <FaCookieBite /> },
    { id: 'drinks', name: 'Drinks', icon: <FaWineGlassAlt /> },
  ];

  const menuItems = {
    'starters': [
      {
        id: 's1',
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with wild mushrooms, truffle oil, and mozzarella',
        price: 12.99,
        image: '/api/placeholder/400/300',
        tags: ['vegetarian'],
        isSignature: true,
        allergens: ['gluten', 'dairy']
      },
      {
        id: 's2',
        name: 'Tuna Tartare',
        description: 'Fresh tuna with avocado, sesame, soy, and wonton crisps',
        price: 14.99,
        image: '/api/placeholder/400/300',
        tags: ['seafood'],
        allergens: ['fish', 'gluten', 'soy']
      },
      {
        id: 's3',
        name: 'Roasted Beet Salad',
        description: 'Heirloom beets with goat cheese, arugula, and candied walnuts',
        price: 11.99,
        image: '/api/placeholder/400/300',
        tags: ['vegetarian', 'gluten-free'],
        allergens: ['dairy', 'nuts']
      }
    ],
    'main-courses': [
      {
        id: 'm1',
        name: 'Herb Crusted Rack of Lamb',
        description: 'New Zealand lamb with rosemary jus, potato gratin, and seasonal vegetables',
        price: 32.99,
        image: '/api/placeholder/400/300',
        isSignature: true,
        allergens: ['dairy']
      },
      {
        id: 'm2',
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice with a medley of wild mushrooms, truffle oil, and parmesan',
        price: 22.99,
        image: '/api/placeholder/400/300',
        tags: ['vegetarian'],
        allergens: ['dairy']
      },
      {
        id: 'm3',
        name: 'Pan Seared Salmon',
        description: 'Atlantic salmon with lemon beurre blanc, asparagus, and herb rice',
        price: 26.99,
        image: '/api/placeholder/400/300',
        tags: ['seafood', 'gluten-free'],
        allergens: ['fish', 'dairy']
      }
    ],
    'desserts': [
      {
        id: 'd1',
        name: 'Dark Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla ice cream',
        price: 10.99,
        image: '/api/placeholder/400/300',
        isSignature: true,
        allergens: ['dairy', 'eggs', 'gluten']
      },
      {
        id: 'd2',
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean custard with caramelized sugar crust',
        price: 9.99,
        image: '/api/placeholder/400/300',
        tags: ['gluten-free'],
        allergens: ['dairy', 'eggs']
      },
      {
        id: 'd3',
        name: 'Fresh Berry Pavlova',
        description: 'Meringue nest with whipped cream and seasonal berries',
        price: 10.99,
        image: '/api/placeholder/400/300',
        tags: ['gluten-free'],
        allergens: ['eggs']
      }
    ],
    'drinks': [
      {
        id: 'dr1',
        name: 'Signature Martini',
        description: 'House-infused berry vodka with elderflower liqueur',
        price: 14.99,
        image: '/api/placeholder/400/300',
        isSignature: true,
        allergens: []
      },
      {
        id: 'dr2',
        name: 'Aged Negroni',
        description: 'House-aged gin, Campari, and sweet vermouth',
        price: 13.99,
        image: '/api/placeholder/400/300',
        allergens: []
      },
      {
        id: 'dr3',
        name: 'Botanical Mocktail',
        description: 'Fresh herbs, cucumber, elderflower syrup, and soda',
        price: 8.99,
        image: '/api/placeholder/400/300',
        tags: ['non-alcoholic', 'vegan', 'gluten-free'],
        allergens: []
      }
    ]
  };

  // Dietary filters
  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian', icon: <FaLeaf /> },
    { id: 'vegan', label: 'Vegan', icon: <FaLeaf /> },
    { id: 'gluten-free', label: 'Gluten Free', icon: <FaBreadSlice /> },
    { id: 'seafood', label: 'Seafood', icon: <FaFish /> },
    { id: 'non-alcoholic', label: 'Non-Alcoholic', icon: <FaCocktail /> }
  ];

  // Filter menu items based on search and dietary filters
  const getFilteredItems = () => {
    let filtered = menuItems[activeCategory];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply dietary filters
    if (dietaryFilter.length > 0) {
      filtered = filtered.filter(item => {
        const itemTags = item.tags || [];
        return dietaryFilter.some(filter => itemTags.includes(filter));
      });
    }
    
    return filtered;
  };

  // Handle adding item to cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="menu-page py-5" style={{ 
      backgroundColor: '#f8f9fa',
      marginTop: '76px',
      minHeight: '100vh'
    }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: '#2b3445' }}>Our Menu</h1>
          <p className="lead text-muted">Discover our culinary creations crafted with passion</p>
          <div className="divider mx-auto my-4" style={{
            width: '80px',
            height: '3px',
            background: '#8B1F3F'
          }}></div>
        </div>

        {/* Search and Filter Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-3 mb-lg-0">
            <InputGroup className="shadow-sm">
              <InputGroup.Text style={{ backgroundColor: '#fff', borderColor: '#dee2e6' }}>
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderLeft: 0 }}
              />
              {searchTerm && (
                <Button 
                  variant="link" 
                  onClick={() => setSearchTerm('')}
                  className="text-muted"
                >
                  Clear
                </Button>
              )}
            </InputGroup>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-wrap gap-2">
              {dietaryOptions.map(option => (
                <Button
                  key={option.id}
                  variant={dietaryFilter.includes(option.id) ? 'primary' : 'outline-secondary'}
                  size="sm"
                  onClick={() => {
                    if (dietaryFilter.includes(option.id)) {
                      setDietaryFilter(dietaryFilter.filter(id => id !== option.id));
                    } else {
                      setDietaryFilter([...dietaryFilter, option.id]);
                    }
                  }}
                  style={{
                    borderRadius: '20px',
                    backgroundColor: dietaryFilter.includes(option.id) ? '#8B1F3F' : 'transparent',
                    borderColor: dietaryFilter.includes(option.id) ? '#8B1F3F' : '#dee2e6'
                  }}
                >
                  {option.icon} {option.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          {/* Menu Categories Sidebar */}
          <Col lg={3} className="mb-4 mb-lg-0">
            <div className="sticky-top" style={{ top: '100px' }}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h4 className="mb-4 fw-bold" style={{ color: '#2b3445' }}>Categories</h4>
                  <Nav className="flex-column gap-2">
                    {menuCategories.map(category => (
                      <Button
                        key={category.id}
                        variant={activeCategory === category.id ? 'primary' : 'outline-secondary'}
                        className="text-start w-100"
                        onClick={() => setActiveCategory(category.id)}
                        style={{
                          backgroundColor: activeCategory === category.id ? '#8B1F3F' : 'transparent',
                          borderColor: activeCategory === category.id ? '#8B1F3F' : '#dee2e6',
                          color: activeCategory === category.id ? '#fff' : '#2b3445'
                        }}
                      >
                        <span className="me-2">{category.icon}</span>
                        {category.name}
                      </Button>
                    ))}
                  </Nav>
                </Card.Body>
              </Card>

              {/* Allergen Guide */}
              <div className="card shadow-sm mt-4">
                <div className="card-body">
                  <h4 className="mb-3">Allergen Guide</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><span className="badge bg-danger me-2">G</span> Gluten</li>
                    <li className="mb-2"><span className="badge bg-warning me-2">D</span> Dairy</li>
                    <li className="mb-2"><span className="badge bg-success me-2">N</span> Nuts</li>
                    <li className="mb-2"><span className="badge bg-info me-2">E</span> Eggs</li>
                    <li className="mb-2"><span className="badge bg-primary me-2">F</span> Fish</li>
                    <li className="mb-2"><span className="badge bg-secondary me-2">S</span> Soy</li>
                  </ul>
                  <p className="small text-muted mt-3">
                    <FaInfoCircle className="me-1" /> Please inform your server of any allergies before ordering.
                  </p>
                </div>
              </div>

              {/* Order Cart Summary */}
              {cart.length > 0 && (
                <Card className="shadow-sm border-0 mt-4">
                  <Card.Body>
                    <h4 className="mb-3 fw-bold d-flex align-items-center justify-content-between" style={{ color: '#2b3445' }}>
                      Your Order
                      <FaShoppingCart className="text-primary" />
                    </h4>
                    {cart.map(item => (
                      <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <span className="badge bg-primary me-2">{item.quantity}</span>
                          <span className="text-truncate">{item.name}</span>
                        </div>
                        <span className="ms-2 text-primary fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <strong>Total:</strong>
                      <strong className="text-primary">${cartTotal.toFixed(2)}</strong>
                    </div>
                    <div className="d-grid gap-2">
                      <Button 
                        as={Link} 
                        to="/order-online" 
                        variant="primary"
                        style={{
                          backgroundColor: '#8B1F3F',
                          borderColor: '#8B1F3F'
                        }}
                      >
                        Proceed to Checkout
                      </Button>
                      <Button 
                        variant="outline-secondary" 
                        onClick={() => setCart([])}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Col>

          {/* Menu Items Display */}
          <Col lg={9}>
            <div className="mb-4">
              <h2>{menuCategories.find(cat => cat.id === activeCategory)?.name}</h2>
              <p className="text-muted">
                {getFilteredItems().length} {getFilteredItems().length === 1 ? 'item' : 'items'} available
              </p>
            </div>

            {getFilteredItems().length > 0 ? (
              <Row xs={1} md={2} className="g-4">
                {getFilteredItems().map(item => (
                  <Col key={item.id}>
                    <Card className="h-100 border-0 shadow-sm menu-item-card">
                      <div className="position-relative">
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          alt={item.name} 
                          style={{ 
                            height: '200px', 
                            objectFit: 'cover',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px'
                          }} 
                        />
                        {item.isSignature && (
                          <Badge 
                            bg="primary" 
                            className="position-absolute top-0 end-0 m-2"
                            style={{
                              backgroundColor: '#8B1F3F',
                              padding: '0.5rem 1rem',
                              borderRadius: '20px'
                            }}
                          >
                            Chef's Signature
                          </Badge>
                        )}
                      </div>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title className="fw-bold" style={{ color: '#2b3445' }}>{item.name}</Card.Title>
                          <span className="badge bg-primary" style={{ 
                            backgroundColor: '#8B1F3F',
                            fontSize: '1rem',
                            padding: '0.5rem 1rem'
                          }}>${item.price.toFixed(2)}</span>
                        </div>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                        
                        {/* Dietary Tags */}
                        <div className="mb-3">
                          {item.tags && item.tags.map(tag => (
                            <Badge 
                              key={tag} 
                              bg="light" 
                              text="dark" 
                              className="me-1"
                            >
                              {dietaryOptions.find(opt => opt.id === tag)?.icon} {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Allergen Info */}
                        <div className="mb-3">
                          {item.allergens.map(allergen => {
                            let bgColor = 'secondary';
                            let letter = allergen.charAt(0).toUpperCase();
                            
                            if (allergen === 'gluten') bgColor = 'danger';
                            if (allergen === 'dairy') bgColor = 'warning';
                            if (allergen === 'nuts') bgColor = 'success';
                            if (allergen === 'eggs') bgColor = 'info';
                            if (allergen === 'fish') bgColor = 'primary';
                            if (allergen === 'soy') bgColor = 'secondary';
                            
                            return (
                              <Badge 
                                key={allergen} 
                                bg={bgColor}
                                className="me-1"
                                title={allergen}
                              >
                                {letter}
                              </Badge>
                            );
                          })}
                        </div>
                        
                        <Button 
                          variant="outline-primary" 
                          className="w-100"
                          onClick={() => addToCart(item)}
                        >
                          Add to Order
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-5">
                <h3>No menu items match your criteria</h3>
                <p>Try adjusting your filters or search term</p>
                <Button variant="primary" onClick={() => {
                  setSearchTerm('');
                  setDietaryFilter([]);
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuPage;