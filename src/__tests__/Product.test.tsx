import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Product from '@/app/product/[id]/page';
import { useParams } from 'next/navigation';
import products from '@/products.json'
import Rating from '@/components/rating/rating';

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

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

describe('Product Page', () => {
  (useParams as jest.Mock).mockReturnValue({ id: '1' });
  it('should render product details', () => {
    render(<Product />);
    expect(screen.getByText('Blue t-shirt')).toBeInTheDocument();
    expect(screen.getByText('clothing')).toBeInTheDocument();
    expect(screen.getByText('Blue t-shirt description')).toBeInTheDocument();
    expect(screen.getByText('$ 9.85')).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByText('(130)')).toBeInTheDocument();
  });

  it('should render the correct number of filled and unfilled stars based on rating', () => {
    render(<Rating rating={4.1} ratingCount={130} />);

    const filledStars = screen.getAllByTestId('star-filled');
    const unfilledStars = screen.getAllByTestId('star-unfilled');

    expect(filledStars.length).toBe(4);
    expect(unfilledStars.length).toBe(1);
  });

  it('should render recommendations', () => {
    const { container } = render(<Product />);
    expect(screen.getByText('Recommended Products')).toBeInTheDocument();
    const recommended = container.getElementsByClassName('card');
    expect(recommended).toHaveLength(1);
    expect(recommended[0]).toHaveTextContent('Jean pants');
  });

  it('should limits recommendations to 5 products', () => {
    const originalProducts = [...products];
    for (let i = 5; i <= 10; i++) {
      originalProducts.push({
        id: i,
        title: `Product ${i}`,
        image: `/product${i}.jpg`,
        category: 'Category A',
        description: `Desc ${i}`,
        price: i * 10,
        rating: 5 - i * 0.1,
        ratingCount: i * 10,
      });
    }

    jest.mock('@/products.json', () => originalProducts, { virtual: true });

    const { container } = render(<Product />);

    const recommended = container.getElementsByClassName('card');
    expect(recommended.length).toBeLessThanOrEqual(5);
  });

  it('should render not found message if product does not exist', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '999' });

    const { container } = render(<Product />);

    expect(container).toHaveTextContent('Product not found');
  });
});