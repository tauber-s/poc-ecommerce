import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('@/products.json', () => ([
  {
    "id": 1,
    "title": "Blue t-shirt",
    "price": 9.85,
    "description": "Blue t-shirt description",
    "category": "clothing",
    "image": "/product1.jpg",
    "rating": 4.7,
    "ratingCount": 130
  },
  {
    "id": 2,
    "title": "Jean pants",
    "price": 12.99,
    "description": "Jean pants description",
    "category": "clothing",
    "image": "/product2.jpg",
    "rating": 3.6,
    "ratingCount": 145
  },
]));

describe('Home Page', () => {
  it('should render all initial products', () => {
    const { container } = render(<Home />);
    const productCards = container.getElementsByClassName('card');
    expect(productCards).toHaveLength(2);
    expect(productCards[0]).toHaveTextContent('Blue t-shirt');
    expect(productCards[1]).toHaveTextContent('Jean pants');
  });

  it('should filter products by search', () => {
    const { container } = render(<Home />);
    const input = screen.getByPlaceholderText('Search for a product...');

    fireEvent.change(input, { target: { value: 'pants' } });

    const filteredCards = container.getElementsByClassName('card');
    expect(filteredCards).toHaveLength(1);
    expect(filteredCards[0]).toHaveTextContent('Jean pants');
  });

  it('should filter without products', () => {
    const { container } = render(<Home />);
    const input = screen.getByPlaceholderText('Search for a product...');

    fireEvent.change(input, { target: { value: 'laptop' } });
    const filteredCards = container.getElementsByClassName('card');
    expect(filteredCards).toHaveLength(0);
    expect(container).toHaveTextContent('Product not found');
  });
})