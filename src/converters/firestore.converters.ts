import { QueryDocumentSnapshot, SnapshotOptions , DocumentData } from "firebase/firestore";
import Category from "../types/categories.types";
import User from "../types/user.types";



export const categoryConverter = {
    toFirestore(category: Category) {
      return {
        displayName: category.displayName,
        imageUrl: category.imageUrl,
        name: category.name,
        products: category.products, // Inclua products
      };
    },
    fromFirestore(snapshot: any) {
      const data = snapshot.data();
      return {
        id: snapshot.id,
        displayName: data.displayName,
        imageUrl: data.imageUrl,
        name: data.name,
        products: data.products || [], // Garante que seja um array
      };
    },
  };
  

export const userConverter = {
    toFirestore(user: User): DocumentData {

        return {...user}

    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
         options: SnapshotOptions
        ): User{

        const data = snapshot.data(options)


        return {
            id:data.id,
            email: data.email,
            firstName:data.firstName,
            lastName:data.lastName,
            provider:data.provider

        }

    }
}