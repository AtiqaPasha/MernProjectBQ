
# Abrish Furniture MERN STACK Project

Abrish Furniture E-commerce initiative modernizes Point-of-Sale systems. Powered by MongoDB, Express.js, React, and Node.js. 


# Technologies Used

1) Frontend: React,Material UI
2) Backend: Express.js, Node.js
3) Database: MongoDB


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start

```

# Live URL
https://pear-tense-jaguar.cyclic.app/


# API Reference

## 1 .BRANDS 
/api/get-all-brands
/api/addbrand
/api/brandbyid/:_id
/api/brandbyname/:BrandName
/api/update-brand
/api/delete-brand/:BrandName

## 2 .PRODUCTS
/api/add-product
/api/get-product-by-brand
/api/get-product-by-category
/api/update-product
/api/delete-product/:ProductName
/api/get-all-products

## 3 .CATEGORIES
/api/getallcategories
/api/categoriesbyid/:_id
/api/categorybyname/:CategoryName
/api/add-category
/api/update-category
/api/delete-category/:CategoryName

## 4 .USERS
/api/login
/api/signup
/api/getallusers
/api/userbyemail/:email
get /api/user/:id
delete /api/user/:id
put /api/user/:id

## 5 .ORDERS
/api/send-mail
/api/place-order

