import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Paginate from "../components/Paginate"

import { listProducts } from "../actions/productActions"

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const productList = useSelector((state) => state.productList)
  const { error, loading, products, pages, page } = productList

  let keyword = `?${searchParams}`
  

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <div>
      <h1>Latest Product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  )
}

export default HomeScreen
