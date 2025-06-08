let player;

  function initPlayer() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('player').style.display = 'block';

    // Lista completa de IDs de vídeo do seu canal
    
	const videoIds = [
  'teste',
  'EC76S_3NZb4',
  'uB5gOCfFf5c',
  'K0KT_zflkXM',
  'QqQg0c_aaz4',
  '5FVnuwiOkKw',
  'OXj5AirkUcc',
  'eaR18xCn2bI',
  'NbY3NwWo7YA',
  'Zt180gM2ecU',
  'WDhQ21IOWEo',
  '_uqbpJVc5DQ',
  '1UY3GXjrQHY',
  'WXu_V8YTWc4',
  'PyUfJ4u1EQw',
  'bGB2WB-o7QM',
  'kdp20_zTVJs',
  'CADqeo_p93A',
  'q3iDZq241AI',
  '-eGYj2r1_SI',
  '1O9NZisJC-w',
  'jA_MxotaS64',
  'fiXI-d8SjG0',
  'MrBFokBzcM8',
  'hvHo3ED5jAU',
  'Lud2e-I2q4w',
  '0f-3GMUkBNE',
  'YJHTAojGyKo',
  '0Fp_xfSg5g4',
  'ZqAFRBkXZ3o',
  'tchmk8sfj-A',
  'KUX3nlU_Gt8',
  'GF26GKHQS44',
  'rvhKR8HslRs',
  'eJ8KYqIJEHE',
  'MuUiQrjySuk',
  'yA8kdZI-lLo',
  'cuRDXTB1AIg',
  'I2Cdlj7Y2JI',
  'xVbzeUnwEk8',
  'vi2rDBI2XGA',
  'XetHMalsGf0',
  'gVMPa4pA5Os',
  'g3l8EwvNL0Q',
  'IGFyT8S30Bw',
  'OnMVeBGia-0',
  'NQIuPwh-cXc',
  'qkd3F8YEB8s',
  'sSv3gIuiYaE',
  'AknwBWMyVtk',
  'n3QZiqE2f-E',
  'KGec18KvyZU',
  'R2p2eaNWECo',
  '3IE9O1ZUBwA',
  'k_xpDTFu2CI',
  'ymRBvgaTUio',
  'JADySVMmjgs',
  'XZ2FS2SMG8k',
  '4G1ue4ersIw',
  'Y0a9F-UZz7E',
  'WCH9tYZm2o8',
  'a4DBfrqK_dw',
  'mFam64XE01c',
  '0wMsO98Ocy0',
  'IrlHabOojs4',
  'EAtSu1rfjiY',
  'RpqIH6q2rlw',
  'spURLBu9k44',
  'jCGYfld3bkQ',
  'zUQBUI7fe1c',
  'yCFf4MCPuB0',
  '0uzHGlDtmwo',
  'BUZeyPBkelY',
  'zujkjYmdER4',
  'Sjf-qClCqXo',
  'UKJi7XgGqWE',
  '2QDid0DO_wg',
  'ao7gsRZaFHo',
  'zWWnzSbVKvk',
  'dBTLIKVo8pU',
  'nRQ8IS-owwk',
  'ur-V5yzVnLg',
  'eRlpBn2p-HQ',
  'wmQDozc4WVo',
  'HL2D3Gj9gvI',
  'TFHgT27L6XY',
  'uRNDYPDwMrM',
  '93TJwz-mSgs',
  'p2o_FNrfPv4',
  '7mpj0nih0p4',
  'w1apyFYyKCM',
  'Ff8ID1i9Ruo',
  'bG9GFcC2PcA',
  '2tXn1DKFnwg',
  'pncPhu6_s9c',
  'BV35LtxVdZ0',
  'F3pXU_79Y3M',
  'zjHDFPF6wJs',
  'GL4RB6f1IL4',
  'iYYKNM5Zd2U',
  'OlFKJitex48',
  '1zr6aS-1vYQ',
  'UJ-0rCEn0mY',
  'ZkT0jfKtBCA',
  'TJTsn1bMgfU',
  'bb5TiK0BHk8',
  'xJLtmWeJ1Ek',
  'Mp1ojxmWbTY',
  'DtDtLVZc3_E',
  'X6hFfnLa8RI',
  'mRw8_GFN2VA',
  '6FN5tltMVd8',
  '32hypfUDQuA',
  'ZSVd2-7fMBc',
  'eFRSqZga-Og',
  'h6mXB3x7DNU',
  'n39uOLnnwgM',
  'PTvP_hGNhmc',
  'JZZCbSIJpD8',
  'ugYnHYXQdPQ',
  'XodZV61pBTw',
  'I2Z551LpZ98',
  '6dws0gRngmc',
  'UJINIbvox6E',
  'p4moiAgc1gc',
  'YxojeagB0wM',
  '4PJltpF0Sug',
  'nOFmUfFc0c8',
  'v_LEJlWW3zg',
  'A7yasfD7Q_M',
  '4WsQzElXBxY',
  'Wc2HP_pnbyw',
  'Ia7pwB6jYDE',
  'fEE-MA5RgGA',
  'VL4-J_hGqsg',
  'xic3b9QdkYA',
  'kDjG7hhceno',
  'M8K_PU-MO-k',
  'WzJullDCbwY',
  'nQg6RDcvvQ0',
  'Sl20MOzzgXI',
  'Eca0Lu8Zek0',
  '-U1dVKuy_OQ',
  'ZACy6-h7EkM',
  '-3XMuDzHEso',
  '3FKOskiVvIM',
  'qzb7RL7VILA',
  '0UyhKRvuX_Q',
  'SEeUZrOSAvI',
  'bWusrFqsFHY',
  'KK7bs0NjTTw',
  'ajvMNPSLT1c',
  'Jx6XQewo1HU',
  'oBYxQkB0uIA',
  '4uLx38NWzVE',
  'X9MT2gDxgV0',
  '_OHSS4ERVlg',
  'qxsVYemiKeE',
  '82PpWHh_L2k',
  'jQH4Sodw1ak',
  'WxxyJ-C06tk',
  '51eHkZm85JM',
  'DJW31axY2F0',
  'uOfkk_pACns',
  '0YsknBrfyVY',
  'y4CVFIHYGFo',
  'IK3-70ffA6c',
  'yertDujkK1E'
];
	

    // Função para embaralhar array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Embaralha e seleciona 100
    const shuffled = shuffleArray([...videoIds]).slice(0, 101);

    const firstVideoId = 'yertDujkK1E'; // um vídeo seu com incorporação liberada
	const playlist = shuffled; // resto da playlist aleatório


    player = new YT.Player('player', {
      videoId: firstVideoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        modestbranding: 1,
        rel: 0,
        mute: 0,
        playlist: playlist.join(',')
      },
      events: {
        onReady: (event) => event.target.playVideo(),
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PAUSED) {
            player.playVideo(); // impede pausar
          }
        }
      }
    });
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
 
let player;

function initPlayer() {
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('player').style.display = 'block';

  // Lista completa de vídeos
  const videoIds = [
    'EC76S_3NZb4',
	'uB5gOCfFf5c', 
	'K0KT_zflkXM', 
	'QqQg0c_aaz4',
    '5FVnuwiOkKw', 
	'OXj5AirkUcc', 
	'eaR18xCn2bI', 
	'NbY3NwWo7YA',
    '32hypfUDQuA',
	'ZSVd2-7fMBc',
	'eFRSqZga-Og',
	'h6mXB3x7DNU',
	'n39uOLnnwgM',
	'PTvP_hGNhmc',
	'JZZCbSIJpD8',
	'ugYnHYXQdPQ',
	'XodZV61pBTw',
	'I2Z551LpZ98',
	'6dws0gRngmc',
	'UJINIbvox6E',
	'p4moiAgc1gc',
	'YxojeagB0wM',
	'4PJltpF0Sug',
	'nOFmUfFc0c8',
	'v_LEJlWW3zg',
	'A7yasfD7Q_M',
	'4WsQzElXBxY',
	'Wc2HP_pnbyw',
	'Ia7pwB6jYDE',
	'fEE-MA5RgGA',
	'VL4-J_hGqsg',
	'xic3b9QdkYA',
	'kDjG7hhceno',
	'M8K_PU-MO-k',
	'WzJullDCbwY',
	'IK3-70ffA6c',
  ];

  // Embaralhar vídeos
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffled = shuffleArray([...videoIds]).slice(0, 101);
  const firstVideoId = 'A7yasfD7Q_M';
  const playlist = shuffled.filter(id => id !== firstVideoId);

  // Cria o player SEM autoplay
  player = new YT.Player('player', {
    videoId: firstVideoId,
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      playlist: playlist.join(',')
    },
    events: {
      onReady: (event) => {
        // Aguarda pequeno tempo antes de tocar (corrige falta de referer)
        setTimeout(() => {
          event.target.playVideo();
          event.target.unMute();
        }, 500); // 500ms costuma ser suficiente
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PAUSED) {
          player.playVideo();
        }
      }
    }
  });
}*/