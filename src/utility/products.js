export var categorizeProducts = (productsArr) => {
  var categories = [];
  var categoryName;
  var isCategoryExist;
  var newCategory;
  //loop over products
  for (var product of productsArr) {
    categoryName = product.category;
    //loop over category array
    isCategoryExist = categories.some(
      (categoryObj) => categoryObj.category === categoryName
    );
    if (isCategoryExist) {
      //if category exist (yes)
      //push product in products field in categoryObj
      categories = categories.map((categoryObj) => {
        if (categoryObj.category === categoryName) {
          categoryObj.products.push(product);
          return categoryObj;
        } else {
          return categoryObj;
        }
      });
    } else {
      //if cateogry doesn't exist (no)
      newCategory = {
        category: product.category,
        products: [product],
      };
      categories.push(newCategory);
    }
  }
  return categories;
};

export var productAdditionInCart = (existingProducts, upcomingProduct) => {
  var exist = existingProducts.some(
    (existingProduct) => existingProduct.id === upcomingProduct.id
  );
  if (!exist) {
    return [...existingProducts, { ...upcomingProduct, quantity: 1 }];
  } else {
    return existingProducts.map((existingProduct) => {
      if (existingProduct.id === upcomingProduct.id) {
        return {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
      } else {
        return existingProduct;
      }
    });
  }
};

export var productRemovalFromCart = (existingProducts, upcomingProductId) => {
  var product = existingProducts.find(
    (existingProduct) => existingProduct.id === upcomingProductId
  );
  if (product) {
    if (product.quantity > 0) {
      return existingProducts.map((existingProduct) => {
        if (existingProduct.id === upcomingProductId) {
          return {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
        } else {
          return existingProduct;
        }
      });
    } else {
      return existingProducts.filter(
        (existingProduct) => existingProduct.id !== upcomingProductId
      );
    }
  } else {
    return existingProducts
  }
};
