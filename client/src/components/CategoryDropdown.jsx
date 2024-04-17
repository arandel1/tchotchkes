import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Products from "./Products";

function CategoryDropdown() {
  //   const [search, setSearch] = useState("");

  //   const categories = [
  //     "All",
  //     "Books",
  //     "Decor",
  //     "Electronics",
  //     "Games + Toys",
  //     "Housewares",
  //     "Jewelry + Accessories",
  //     "Miscellaneous",
  //   ];

  //   let filteredItems =
  //     categories.filter((category) =>
  //       category.toLowerCase().includes(search.toLowerCase())
  //     ) || [];

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      className="nav-link"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          {/* <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          /> */}
          <ul className="list-unstyled">
            <label htmlFor="category-select">
              {React.Children.toArray(children).filter((child) => (
                <option>
                  !value || child.props.children.toLowerCase().startsWith(value)
                </option>
              ))}
            </label>
          </ul>
        </div>
      );
    }
  );
  const categories = [
    "Books",
    "Decor",
    "Electronics",
    "Games + Toys",
    "Housewares",
    "Jewelry + Accessories",
    "Miscellaneous",
  ];
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        View by Category
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item href="/products">Select</Dropdown.Item>
        {categories.map((cat) => {
          return (
            <Dropdown.Item
              key={cat}
              value={cat}
              href={`products?category=${encodeURIComponent(cat)}`}
            >
              {cat}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryDropdown;
