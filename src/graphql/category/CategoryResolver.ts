import {Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Category from "./Category";
import CategorySchema from '../../model/CategorySchema';

@InputType()
class CategoryInput {
  @Field()
  description: string;
  @Field()
  name: string;
}

@Resolver(Category)
class CategoryResolver {

  @Query(() => [Category] )
  async categories() {
    const categories = await CategorySchema.find();
    return categories;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("categoryInput") CategoryInput: CategoryInput) {
    const category = await CategorySchema.create(CategoryInput);
    return category;
  }
}

export default CategoryResolver;
