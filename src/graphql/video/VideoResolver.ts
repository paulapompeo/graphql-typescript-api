import {Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../../model/VideoSchema';

@InputType()
class VideoInput {
  @Field()
  description: string;
  @Field()
  name: string;
  @Field()
  category: string;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video] )
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos(@Arg("videoInput") VideoInput: VideoInput) {
    const video = await VideoSchema.create(VideoInput);
    return video;
  }
}

export default VideoResolver;
