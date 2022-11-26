import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContext from '../contexts/PageContext';

function Filter({
  trigger,
  setTrigger,
  sortMethod,
  setSortMethod,
  totalPages,
  setSearchWord,
  page,
}) {
  const { nowPage, location, cate } = useContext(PageContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    // navigate(location.pathname);
  };
  return (
    <>
      <div className="filter">
        <div className="filter-s-p">
          <div className="search-bar">
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleChange}
              style={{ outline: 'none', paddingLeft: '10px' }}
            />
            <i
              className="fa-solid fa-magnifying-glass bg_main_light_color1"
              id="pro-search"
            ></i>
          </div>
          <div
            className="price-filter"
            onClick={() => {
              setTrigger(!trigger);
            }}
          >
            <i className="fa-solid fa-filter"></i>
            <p>篩選</p>
          </div>
        </div>

        <div className="filter-and-page">
          <div className="filter-btn-group">
            <button
              className={`newProduct bg_main_light_color1 ${
                sortMethod === 'created_at' || sortMethod === '' ? 'active' : ''
              }`}
              onClick={() => {
                setSortMethod('created_at');
              }}
            >
              最新商品
            </button>
            <button
              className={`newProduct bg_main_light_color1 ${
                sortMethod === 'top_sell' ? 'active' : ''
              }`}
            >
              熱賣商品
            </button>
            {sortMethod === 'lowToHigh' || sortMethod === 'highToLow' ? (
              <button
                type="button"
                onClick={() => setSortMethod('')}
                className={`newProduct bg_main_light_color1 ${
                  sortMethod === 'lowToHigh' || sortMethod === 'highToLow'
                    ? 'active'
                    : ''
                }`}
              >
                取消排序
              </button>
            ) : (
              <select
                name="priceSort"
                id="priceSort"
                className={`newProduct bg_main_light_color1 ${
                  sortMethod === 'lowToHigh' || sortMethod === 'highToLow'
                    ? 'active'
                    : ''
                }`}
                onChange={(e) => {
                  setSortMethod(e.target.value);
                }}
              >
                <option value="">價格排序</option>
                <option value="lowToHigh">低到高</option>
                <option value="highToLow">高到低</option>
              </select>
            )}
          </div>
          <div className="pageSel">
            <p>
              <span className="text_main_color">{page}</span>/{totalPages}
            </p>
            <div className="changeBtn">
              <div
                className={`pre-page ${nowPage === 1 ? 'disable' : ''}`}
                onClick={() => {
                  navigate(
                    nowPage > 1
                      ? `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${
                                nowPage <= 1 ? 1 : nowPage - 1
                              }`
                            : `?page=${nowPage <= 1 ? 1 : nowPage - 1}`
                        }`
                      : `${location.pathname}${
                          cate ? `?cate=${cate}&page=${1}` : `?page=${1}`
                        }`
                  );
                }}
              >
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div
                className={`next-page ${
                  nowPage === totalPages ? 'disable' : ''
                }`}
                onClick={() => {
                  navigate(
                    nowPage < totalPages
                      ? `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${
                                nowPage >= totalPages ? totalPages : nowPage + 1
                              }`
                            : `?page=${
                                nowPage >= totalPages ? totalPages : nowPage + 1
                              }`
                        }`
                      : `${location.pathname}${
                          cate
                            ? `?cate=${cate}&page=${totalPages}`
                            : `?page=${totalPages}`
                        }`
                  );
                }}
              >
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
