import React from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

interface LinkListProps {
  products: Product[];
}

export default function LinkList({ products }: LinkListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                {product.title}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-muted)",
                  marginTop: "4px",
                }}
              >
                {product.description}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
