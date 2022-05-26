## Customizations

- Change the background color to #F1E7E7 (Find the best way to do this)
- Create a new route (Using React Router) which should contain a list with all products using the Venia components (Gallery and Pagination)
  The route should be: /see-all-products

## Change the background color to #F1E7E7
- There where different ways to do this
- Added a variable  ```--venia-global-color-background``` in src/tokens.module.css
- Used the variable in root (src/components/Main/main.module.css) added ```background: var(--venia-global-color-background)```

| References |
| ------ |
| https://developer.adobe.com/commerce/pwa-studio/tutorials/basic-modifications/modify-footer/  |

## Create a new route (Using React Router) which should contain a list with all products using the Venia components (Gallery and Pagination)
The route should be: /see-all-products
- Added a new route in local-intercept.js
- updated local intercept path
- I Could see search using those components.
- I have used the same component. 
- Parameter will be empty at first time which will give all the data from product gql(m2).


| References |
| ------ |
| https://developer.adobe.com/commerce/pwa-studio/tutorials/basic-modifications/add-static-route/  |

### Query used by default
````
{
  products(
    filter: {}
    pageSize: 12
    currentPage: 1
    search: ""
    sort: { relevance: DESC }
  ) {
    total_count
    items {
      sku
    }
  }
}

````

### How we can configure and execute the application
- Now edit the .env file add the magento backend url 
```
STAGING_SERVER_HOST=magemontrealtest.com
STAGING_SERVER_PORT=8724
```
- Start staging venia server.
``` sudo yarn build && yarn start ```
