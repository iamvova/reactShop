import React from 'react'
import styled from 'styled-components'
import Newletter from "../components/Newletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive";
import { useState } from 'react'
import AllProduct from "../components/allProducts"
const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: #fff;
    border: 1px solid #000;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`

`

const AllProducts = () => {
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    
    const handleFilters = (e)=>{
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    
    const handleClick = (e)=>{
        e.preventDefault()
        setFilters({})
        setSort("")
    }

    return (
        <Container>
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                    <button onClick={handleClick}>Reset</button>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <AllProduct filters={filters} sort={sort} />
            <Newletter />
            <Footer />
        </Container>
    )
}

export default AllProducts