import { XMarkIcon } from '@heroicons/react/20/solid';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Movie, MovieFromModal } from '../types';

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data: MovieFromModal = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error.message));
    }

    fetchMovie();
  }, [movie]);

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <div>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </MuiModal>
  );
}

export default Modal;
