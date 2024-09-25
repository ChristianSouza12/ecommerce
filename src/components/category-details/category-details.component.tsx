import {  collection, getDocs, query, where } from "firebase/firestore"
import { FunctionComponent, useEffect, useState } from "react"
import { db } from "../../config/firebase.config"
import { categoryConverter } from "../../converters/firestore.converters"
import Category from "../../types/categories.types"
import Loading from "../loading/loading.component"

import {Container, CategoryTitle,IconContainer, ProductsContainer} from "./category-detail.styles"

import {BiChevronLeft} from "react-icons/bi"
import ProductItem from "../product-item/product-item.component"
import { useNavigate } from "react-router-dom"

interface CategoryDetailsProps{
    categoryId: string
}


const CategoryDetails : FunctionComponent <CategoryDetailsProps> = ({categoryId}) => {

    const [ category, setCategory] = useState<Category | null> (null)
    const [isLoading , setIsLoading] = useState(false)

    const navigate = useNavigate()


    const handleBackClick = () => {

        navigate("/")

    }

    useEffect(() => {
        const fetchCategory = async () => {
            try{
                setIsLoading(true)

                const querySnapshot = await getDocs(
                    query(
                        collection(db,"categories").withConverter(categoryConverter),
                        where("__name__","==", categoryId)
                    )
                )
                const category = querySnapshot.docs[0]?.data()
                setCategory(category)

            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false)
            }
           


           

           
        }

        fetchCategory()

    },[])


   

    if(isLoading) return <Loading/>

    return(
       <Container>
            <CategoryTitle>
                <IconContainer onClick={handleBackClick}   >
                    <BiChevronLeft     size={36}/>
                </IconContainer>
                <p>Explorar {category?.displayName}</p>
            </CategoryTitle>
            <ProductsContainer>
                {category?.products.map((product) => (
                    <ProductItem key={product.id}  product={product}     />
                ))}

            </ProductsContainer>
       </Container>

    )

}


export default CategoryDetails