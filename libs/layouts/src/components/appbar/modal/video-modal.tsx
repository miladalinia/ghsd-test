import React from 'react';
import { ModalStyled, VideoStyled } from './video-modal.style';
import { useTr } from '@ghased-portal/translation';

type Props = {
  videoModal: boolean;
  setVideoModal: (videoModal: boolean) => void;
};

const VideoModal: React.FC<Props> = ({ videoModal, setVideoModal }) => {
  const [t] = useTr();

  return (
    <ModalStyled
      centered
      width={'100%'}
      title={<p>{t('button.about_system')}</p>}
      footer={null}
      open={videoModal}
      onCancel={() => setVideoModal(false)}
    >
      {videoModal ? (
        <VideoStyled controls autoPlay>
          <source src={'/media/slider/videos/general-introduction.mp4'} type='video/mp4' />
          Your browser does not support the video tag.
        </VideoStyled>
      ) : (
        <p>Loading video...</p>
      )}
    </ModalStyled>
  );
};

export default VideoModal;
