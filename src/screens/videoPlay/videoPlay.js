import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  Switch,
  Pressable,
  ImageBackground,
} from 'react-native';
import PlayHead from '../../components/player/playHead';
import VideoDetails from '../../components/player/videoDetails';
import AuthorCTA from '../../components/player/authorCTA';
import ShareDownload from '../../components/player/shareDownload';
import MoreHeader from '../../components/player/moreHeader';
import VideoDescription from '../../components/player/videoDescription';
import bioInfo from '../../components/blueprint/bioInfo';
import VideoRecommdation from '../../components/player/VideoRecommdation';
import { IMAGES } from '../../components/blueprint';

const VideoPlay = () => {

  return (
    <View style={styles.container}>
      {/* Video */}
      <PlayHead />

      
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        {/* video details */}
        <VideoDetails bioInfo={bioInfo} />

        <ShareDownload videoDownloaded ={false} />
        {/* Author's Details */}
        <AuthorCTA bioInfo={bioInfo} cover_image={IMAGES.cover1} subscribed={true} />

        {/* Video Description */}
        <VideoDescription bioInfo={bioInfo} />

        {/* more videos header */}
        <MoreHeader />

        {/* more videos feeds */}
        <VideoRecommdation last={false} />
        <VideoRecommdation last={false} />
        <VideoRecommdation last={false} />
        <VideoRecommdation last={true} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
export default VideoPlay;
