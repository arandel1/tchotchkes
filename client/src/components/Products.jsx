import { useEffect, useState } from "react";

function Products() {
  

  useEffect(()=> {
    async function getProducts(){
      const baseUrl = 'http://localhost:8080/';
      const response = await fetch(`${baseUrl}api/products`);
      const apiProducts = await response.json();
      setProducts(apiProducts);
    }

    getProducts();

  }, [])

  
  // const products = [
  //   {
  //     id: 1,
  //     name: "Aero Transistor Radio",
  //     desc: "Vintage Aero Transistor Radio, AM Band Only, Made In Hong Kong, Circa 1960s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/7/70/Vintage_Aero_Transistor_Radio%2C_No_Model_Number%2C_AM_Band_Only%2C_6_Transistors%2C_Made_In_Hong_Kong%2C_Circa_1960s_%287721623244%29.jpg",
  //     price: 75,
  //     category_name: "Electronics",
  //   },
  //   {
  //     id: 2,
  //     name: "Philco Transistor Radio",
  //     desc: "Vintage Philco 6-Transistor Radio, Model T76-124, Leather Case, Circa 1958",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/b/b6/Vintage_Philco_6-Transistor_Radio%2C_Model_T76-124%2C_1958%2C_Leather_Case_%288385122630%29.jpg",
  //     price: 50,
  //     category_name: "Electronics",
  //   },
  //   {
  //     id: 3,
  //     name: "Valiant Transister Clock Radio",
  //     desc: "Vintage Valiant Transistorized Clock Radio, Model C-1600, Made In Hong Kong, Circa 1960s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vintage_Valiant_Transistorized_Clock_Radio%2C_Model_C-1600_%288337826712%29.jpg/640px-Vintage_Valiant_Transistorized_Clock_Radio%2C_Model_C-1600_%288337826712%29.jpg",
  //     price: 150,
  //     category_name: "Electronics",
  //   },
  //   {
  //     id: 4,
  //     name: "Babyphon Phonograph Turntable",
  //     desc: "Metz Transformatoren- und Apparatefabrik, Fürth, Germany, circa 1955",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Babyphon_Phonograph_turntable.jpg/1352px-Babyphon_Phonograph_turntable.jpg?20210713103217",
  //     price: 150,
  //     category_name: "Electronics",
  //   },
  //   {
  //     id: 5,
  //     name: "Underwood Typewriter",
  //     desc: "Vintage Underwood Typewriter, circa 1900",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Vintage_Underwood_Typewriter_%2848011511697%29.jpg/1600px-Vintage_Underwood_Typewriter_%2848011511697%29.jpg?20190812174910",
  //     price: 150,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 6,
  //     name: "Gold Vintage Safety Razor",
  //     desc: "Vintage Valet Auto Strop Safety Razor, Made In USA",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Shaving_Collectibles_-_Vintage_Valet_Auto_Strop_Safety_Razor%2C_Made_In_USA_%2823312923152%29.jpg/1599px-Shaving_Collectibles_-_Vintage_Valet_Auto_Strop_Safety_Razor%2C_Made_In_USA_%2823312923152%29.jpg?20151227194027",
  //     price: 70,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 7,
  //     name: "Purple Perfume Bottle",
  //     desc: "Perfume set from Soviet Union, circa 1965",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Perfume_set_from_Sovjetunio_cca_1965.jpg/1200px-Perfume_set_from_Sovjetunio_cca_1965.jpg?20100417190340",
  //     price: 40,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 8,
  //     name: "Aladdin Lamp Table Lighter",
  //     desc: "Vintage Aladdin Table Lamp-Style Cigarette Lighter, Made In Japan",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Vintage_Aladdin_Table_Lamp-Style_Cigarette_Lighter%2C_Made_In_Japan_%2817042688825%29.jpg/872px-Vintage_Aladdin_Table_Lamp-Style_Cigarette_Lighter%2C_Made_In_Japan_%2817042688825%29.jpg?20151227195805",
  //     price: 75,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 9,
  //     name: "Green Glass Table Lighter",
  //     desc: "Vintage Decorative Green Glass Table Cigarette Lighter",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vintage_Decorative_Green_Glass_Table_Cigarette_Lighter_%2814296516708%29.jpg/1600px-Vintage_Decorative_Green_Glass_Table_Cigarette_Lighter_%2814296516708%29.jpg?20151227194843",
  //     price: 50,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 10,
  //     name: "Vintage Gold Rupee",
  //     desc: "Rupee from 1899",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Vintage_coon.jpg/640px-Vintage_coon.jpg",
  //     price: 50,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 11,
  //     name: "Ceramic Bear Figurine",
  //     desc: "Teal Walter Bosse Bear Figurine",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Wbosse.jpg/1167px-Wbosse.jpg?20200523174201",
  //     price: 150,
  //     category_name: "Miscellaneous Collectibles",
  //   },
  //   {
  //     id: 12,
  //     name: "Steampunk Lamp",
  //     desc: "Handmade Victorian style Edison lamp made with real vintage mechanical clock and antique pieces of brass",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Victorian_Style_Steampunk_lamp.jpg/920px-Victorian_Style_Steampunk_lamp.jpg?20180814155821",
  //     price: 100,
  //     category_name: "Housewares",
  //   },
  //   {
  //     id: 13,
  //     name: "McDonald's Glass",
  //     desc: "Vintage 1980s McDonald's Fast Food Restaurant Collectible Yellow and White Daisy Glass Tumbler - Retro Flower Power",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/1/1a/Vintage_1980s_McDONALDS_Fast_Food_Restaurant_Collectible_Yellow_and_White_Daisy_Glass_Tumbler_-_Retro_Flower_Power_%282700636560%29.jpg",
  //     price: 10,
  //     category_name: "Housewares",
  //   },
  //   {
  //     id: 14,
  //     name: "Vintage German Glassware Set",
  //     desc: "5 piece glassware set from Ehrenfeld Glassworks circa 1890",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Gl%C3%A4ser_der_Ehrenfelder_Glash%C3%BCtte_2.jpg/1599px-Gl%C3%A4ser_der_Ehrenfelder_Glash%C3%BCtte_2.jpg?20221210211645",
  //     price: 300,
  //     category_name: "Housewares",
  //   },
  //   {
  //     id: 15,
  //     name: "Bisque Fired Vase",
  //     desc: "Royal Oak Pottery Ltd bisque fired, handpainted vase, circa mid 1940s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vase_%28AM_1987.70-1%29.jpg/900px-Vase_%28AM_1987.70-1%29.jpg?20180111075302",
  //     price: 150,
  //     category_name: "Housewares",
  //   },
  //   {
  //     id: 16,
  //     name: "Vintage Coca Cola Sign",
  //     desc: "Metal Coca Cola Sign, circa 1950s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/19-03-001-coca-cola.jpg/1514px-19-03-001-coca-cola.jpg?20190208000122",
  //     price: 40,
  //     category_name: "Decor",
  //   },
  //   {
  //     id: 17,
  //     name: "Neon Route 66 Sign",
  //     desc: "Vintage Neon Sign from historic U.S. Route 66, circa 1950s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Route_66_neon_sign%2C_part_of_a_display_of_vintage_and_neon_from_historic_U.S._Route_66_on_the_median_strip_of_Santa_Monica_Boulevard_in_West_Hollywood%2C_California_LCCN2013631565.tif/lossy-page1-1600px-thumbnail.tif.jpg?20160902190314",
  //     price: 150,
  //     category_name: "Decor",
  //   },
  //   {
  //     id: 18,
  //     name: "Neon Polly Gass Sign",
  //     desc: "Vintage Polly Gas Parrot Sign, circa 1950s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/A_vintage_Polly_Gas_sign_in_Neon_Alley%2C_a_public-art_project_in_Pueblo%2C_Colorado%2C_devised_by_sign_collector_Joseph_Koncilja_LCCN2015632739.tif/lossy-page1-717px-A_vintage_Polly_Gas_sign_in_Neon_Alley%2C_a_public-art_project_in_Pueblo%2C_Colorado%2C_devised_by_sign_collector_Joseph_Koncilja_LCCN2015632739.tif.jpg?20160912063010",
  //     price: 250,
  //     category_name: "Decor",
  //   },
  //   {
  //     id: 19,
  //     name: "Operation Game",
  //     desc: "Original 1965 edition of Operation",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/1960%27s_edition_of_Operation.jpg/636px-1960%27s_edition_of_Operation.jpg?20200413130345",
  //     price: 30,
  //     category_name: "Games + Toys",
  //   },
  //   {
  //     id: 20,
  //     name: "Ouija Board",
  //     desc: "Ouija board manufactured by the Kennard Novelty Company of Baltimore, circa 1890",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ouija_board_-_Kennard_Novelty_Company.png/1600px-Ouija_board_-_Kennard_Novelty_Company.png?20200325173149",
  //     price: 70,
  //     category_name: "Games + Toys",
  //   },
  //   {
  //     id: 21,
  //     name: "Custom Lego Chess Set",
  //     desc: "Custom Handmade Red & Blue Lego Chess Set",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Custom_Lego_Chess_Set.jpg/1600px-Custom_Lego_Chess_Set.jpg?20201229212027",
  //     price: 50,
  //     category_name: "Games + Toys",
  //   },
  //   {
  //     id: 22,
  //     name: "Teddy Ruxpin",
  //     desc: "Teddy Ruxpin Mechanical Stuffed Animal Toy circa 1980s",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Teddy_Ruxpin_Mechanical_Animal_-_DPLA_-_25ec4b9fcc42f658529b1b4072586a84_%28page_1%29.jpg/900px-Teddy_Ruxpin_Mechanical_Animal_-_DPLA_-_25ec4b9fcc42f658529b1b4072586a84_%28page_1%29.jpg?20230105175613",
  //     price: 40,
  //     category_name: "Games + Toys",
  //   },
  //   {
  //     id: 23,
  //     name: "Perfume Brooch",
  //     desc: "Vintage Perfume Cameo in Original Box",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Vintage_%22Perfume%22_Cameo_in_Original_Box_%288380159266%29.jpg/640px-Vintage_%22Perfume%22_Cameo_in_Original_Box_%288380159266%29.jpg",
  //     price: 80,
  //     category_name: "Jewelry + Accessories",
  //   },
  //   {
  //     id: 24,
  //     name: "Fruit Brooch",
  //     desc: "Brooch, circular enamel brooch of still life of jug and fruit, including peaches, grapes, apples, figs and vine leaves, set into engraved copper frame, pin",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Brooch_%28AM_1932.233-6%29.jpg/640px-Brooch_%28AM_1932.233-6%29.jpg",
  //     price: 100,
  //     category_name: "Jewelry + Accessories",
  //   },
  //   {
  //     id: 25,
  //     name: "Pocket Watch",
  //     desc: "Vintage Waltham Pocket Watch, Model 1877",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vintage_Waltham_Pocket_Watch%2C_Model_1877%2C_Coin_Silver_Hunter_Case%2C_Key_Wind%2C_Size_18%2C_11_Jewels%2C_Circa_1879_%2814487709914%29.jpg/640px-Vintage_Waltham_Pocket_Watch%2C_Model_1877%2C_Coin_Silver_Hunter_Case%2C_Key_Wind%2C_Size_18%2C_11_Jewels%2C_Circa_1879_%2814487709914%29.jpg",
  //     price: 200,
  //     category_name: "Jewelry + Accessories",
  //   },
  //   {
  //     id: 26,
  //     name: "Book of Songs and Ballads",
  //     desc: "The Book of old English songs and ballads",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/The_Book_of_old_English_songs_and_ballads_-_00_cover.jpg/640px-The_Book_of_old_English_songs_and_ballads_-_00_cover.jpg",
  //     price: 85,
  //     category_name: "Books",
  //   },
  //   {
  //     id: 27,
  //     name: "Mutt and Jeff Book",
  //     desc: "Mutt and Jeff's Big Book, 1926",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mutt_and_Jeff%27s_Big_Book_%281926_Book_Cover%29.jpg/640px-Mutt_and_Jeff%27s_Big_Book_%281926_Book_Cover%29.jpg",
  //     price: 90,
  //     category_name: "Books",
  //   },
  //   {
  //     id: 28,
  //     name: "A Yankee in the Court of King Arthur book",
  //     desc: "A Yankee in the Court of King Arthur, book by Samuel Clemens (Mark Twain), published in 1889 by Chatto & Windus, London.",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_Yankee_in_the_Court_of_King_Arthur_book_cover_1889.jpg/640px-A_Yankee_in_the_Court_of_King_Arthur_book_cover_1889.jpg",
  //     price: 300,
  //     category_name: "Books",
  //   },
  //   {
  //     id: 29,
  //     name: "Cecily Parsley's Nursery Rhymes  Book",
  //     desc: "Beatrix Potter, First Edition, circa 1922",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cecily_Parsley%27s_Nursery_Rhymes_cover_02.jpg/640px-Cecily_Parsley%27s_Nursery_Rhymes_cover_02.jpg",
  //     price: 300,
  //     category_name: "Books",
  //   },
  //   {
  //     id: 30,
  //     name: "The Uncertain Glory Book",
  //     desc: "Harriet Lummis Smith: The Uncertain Glory , cover by Horace Weston Taylor, published in Boston, 1926",
  //     imgURL:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Horace_Weston_Taylor_-_The_Uncertain_Glory_-_book_cover%2C_1926.jpg/640px-Horace_Weston_Taylor_-_The_Uncertain_Glory_-_book_cover%2C_1926.jpg",
  //     price: 300,
  //     category_name: "Books",
  //   },
  // ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [products, setProducts] = useState([]);

  return (
    <>
      <h2>Product List</h2>
      {products.length === 0 && <p>No inventory</p>}

      <div className="card" style={{ width: "18rem" }}>
        {products.map((product, index) => (
          <div key={product.id}>
            <img
              src={product.imgURL}
              className="card-img-top"
              alt={product.name}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              {/* <p className="card-text">{product.desc}</p> */}
              <a
                href="#"
                className={
                  selectedIndex === index
                    ? "btn btn-primary active"
                    : "btn btn-primary"
                }
                onClick={() => {
                  setSelectedIndex(index);
                  console.log(product);
                }}
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
