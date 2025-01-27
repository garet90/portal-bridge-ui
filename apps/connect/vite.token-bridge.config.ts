import { defineConfig } from 'vite'
import viteConfig, { chains } from './vite.config'
import type { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect'

const PUBLIC_URL = viteConfig.base;
const ADVANCE_TOOLS_HREF = `${PUBLIC_URL}/advanced-tools/`
const ADVANCE_TOOLS_HREF_TEMPLATE = `${ADVANCE_TOOLS_HREF}#/transfer?sourceChain={:sourceChain}&targetChain={:targetChain}`
const USDC_BRIDGE_HREF = `${PUBLIC_URL}/usdc-bridge/`
const PRIVACY_POLICY_HREF = `${PUBLIC_URL}/#/privacy-policy/`

const ALGORAND = {
  icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_5964_23764' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_5964_23764)'%3E%3Cpath d='M17.1382 72.7516L27.3034 55.1578L37.4598 37.6258L47.5588 20.032L49.2361 17.2424L49.9732 20.032L53.0718 31.6141L49.6024 37.6258L39.4461 55.1578L29.3471 72.7516H41.4853L51.6461 55.1578L56.9118 46.0519L59.3925 55.1578L64.0977 72.7516H75L70.2948 55.1578L65.5852 37.6258L64.3493 33.1015L71.9059 20.032H60.8799L60.5048 18.7299L56.6647 4.35825L56.1703 2.5H45.577L45.3298 2.87077L35.4162 20.032L25.2554 37.6258L15.1608 55.1578L5 72.7516H17.1382Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A",
  name: "algorand",
  label: "Algorand",
}

const ACALA = {
  icon: "data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 490 490' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M245 490c135.31 0 245-109.69 245-245S380.31 0 245 0 0 109.69 0 245s109.69 245 245 245zm1-23c122.61 0 222-99.393 222-222S368.607 23 246 23 24 122.393 24 245s99.393 222 222 222zm-1-17c113.22 0 205-91.782 205-205S358.218 40 245 40 40 131.782 40 245s91.782 205 205 205zm.5-25c99.687 0 180.5-80.813 180.5-180.5S345.187 64 245.5 64 65 144.813 65 244.5 145.813 425 245.5 425zM235.313 98.66l130.68 226.7 14.012-24.31-116.66-202.39zm-125.31 201.98 111.84-194.03.231.4.22-.382 132.54 229.93h-28.025l-33.484-58.088c-15.215-4.81-31.414-7.404-48.22-7.404-8.663 0-17.117.605-25.336 1.812l16.14-27.956c3.047-.149 6.113-.224 9.196-.224 10.267 0 20.339.831 30.154 2.43l-53.195-92.284-98.05 170.1zm76.035-2.949 50.256-87.186-14.012-24.309-86.676 150.37h28.025l.266-.462c24.037-14.472 51.619-21.787 81.737-21.787 19.232 0 37.67 3.397 54.747 9.625l-18.775-32.52a187.14 187.14 0 0 0-35.972-3.472c-20.842 0-40.885 3.425-59.596 9.744z' clip-rule='evenodd' fill='url(%23a)' fill-rule='evenodd'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='462.5' x2='101' y1='490' y2='43.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235A81FF' offset='0'/%3E%3Cstop stop-color='%23E40C5B' offset='.524'/%3E%3Cstop stop-color='%23FF4C3B' offset='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
  name: "acala",
  label: "Acala",
}

const SEI = {
  icon: "data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m 127.67411,256 c 38.02499,0 72.18784,-16.49691 95.68658,-42.70676 -10.93123,-9.47577 -27.40461,-10.05162 -39.04159,-0.68556 l -2.22314,1.78953 c -21.30703,17.14908 -52.35448,14.61676 -70.58505,-5.7577 -9.94332,-11.11197 -26.972141,-12.24661 -38.308517,-2.55277 L 47.570215,228.00608 C 69.524032,245.52451 97.372724,256 127.67411,256 Z m 41.60702,-61.98133 C 189.57566,177.68394 218.1014,178.27 237.62049,194.0459 249.28754,174.76386 256,152.16374 256,128.00034 c 0,-26.85042 -8.28793,-51.769568 -22.45139,-72.350916 -9.131,-1.939587 -19.02787,0.325741 -26.54036,6.966212 l -2.13843,1.889976 C 184.37854,82.617466 153.24774,81.516899 134.09348,62.003681 123.64732,51.36103 106.58366,51.011574 95.70776,61.217474 L 65.879285,89.2086 49.470132,71.811468 79.298607,43.820001 C 99.6717,24.70176 131.636,25.356444 151.20497,45.292785 c 10.2248,10.416813 26.8437,11.004304 37.78245,1.335536 l 2.13842,-1.889909 c 6.64005,-5.869189 14.32197,-9.825846 22.366,-11.906837 C 190.75623,12.421275 160.66937,0 127.67411,0 62.5305,0 8.7242884,48.41669 0.45065936,111.14157 20.23734,101.67056 44.644196,105.31504 60.77713,121.79424 c 10.185043,10.40324 26.584631,11.50108 38.071994,2.54936 l 16.677656,-12.99623 c 20.96064,-16.333367 50.58976,-15.542866 70.64448,1.88493 l 32.46987,28.21744 -15.73073,18.00977 -32.46987,-28.21675 c -11.40333,-9.91056 -28.25178,-10.36033 -40.17025,-1.07263 l -16.67765,12.9969 C 92.486461,159.61353 62.356352,157.59639 43.643919,138.48264 32.762761,127.36794 14.966434,126.98019 3.609064,137.61037 L 0,140.98839 c 2.7009241,26.73389 13.649562,51.04108 30.269414,70.34973 l 27.34647,-23.38517 c 21.235909,-18.16038 53.135306,-16.03488 71.761456,4.78115 9.73221,10.87688 26.30602,12.22823 37.67997,3.07342 z' fill='%23ffffff' id='path1050' style='stroke-width:6.82333' /%3E%3C/svg%3E",
  name: "sei",
  label: "Sei"
}

const MORE = {
  icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='91' height='91' viewBox='0 0 91 91' fill='none'%3E%3Ccircle cx='45.5' cy='45.5' r='45.5' fill='%23E8E8EC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M26.833 25.8333C26.2807 25.8333 25.833 26.281 25.833 26.8333V63.1666C25.833 63.7189 26.2807 64.1666 26.833 64.1666H63.1663C63.7186 64.1666 64.1663 63.7189 64.1663 63.1666V48.7333C64.1663 48.4571 63.9425 48.2333 63.6663 48.2333C63.3902 48.2333 63.1663 48.4571 63.1663 48.7333V63.1666H26.833V26.8333L41.2663 26.8333C41.5425 26.8333 41.7663 26.6094 41.7663 26.3333C41.7663 26.0571 41.5425 25.8333 41.2663 25.8333H26.833ZM64.0199 25.9797C64.0321 25.9919 64.0435 26.0046 64.0542 26.0177L64.1663 26.324L64.1663 26.3342V37.5333C64.1663 37.8094 63.9425 38.0333 63.6663 38.0333C63.3902 38.0333 63.1663 37.8094 63.1663 37.5333V27.5404L41.6199 49.0868C41.4246 49.2821 41.1081 49.2821 40.9128 49.0868C40.7175 48.8915 40.7175 48.575 40.9128 48.3797L62.4592 26.8333H52.4663C52.1902 26.8333 51.9663 26.6094 51.9663 26.3333C51.9663 26.0571 52.1902 25.8333 52.4663 25.8333H63.666H63.6663C63.6823 25.8333 63.6983 25.834 63.7143 25.8355C63.7632 25.8402 63.8116 25.8521 63.8577 25.8712C63.9167 25.8956 63.972 25.9318 64.0199 25.9797Z' fill='%230F1022'/%3E%3Cpath d='M63.1663 63.1666V64.1666H64.1663V63.1666H63.1663ZM26.833 63.1666H25.833V64.1666H26.833V63.1666ZM26.833 26.8333L26.833 25.8333L25.833 25.8333V26.8333H26.833ZM41.2663 26.8333L41.2663 25.8333H41.2663L41.2663 26.8333ZM64.0542 26.0177L64.9934 25.6742L64.9356 25.5161L64.8292 25.3857L64.0542 26.0177ZM64.0199 25.9797L64.727 25.2726L64.727 25.2726L64.0199 25.9797ZM64.1663 26.324L65.1662 26.3158L65.1648 26.1429L65.1054 25.9806L64.1663 26.324ZM64.1663 26.3342L65.1664 26.3342L65.1663 26.326L64.1663 26.3342ZM63.1663 27.5404H64.1663V25.1261L62.4592 26.8333L63.1663 27.5404ZM40.9128 49.0868L40.2057 49.7939L40.2057 49.7939L40.9128 49.0868ZM40.9128 48.3797L40.2057 47.6726L40.2057 47.6726L40.9128 48.3797ZM62.4592 26.8333L63.1663 27.5404L64.8734 25.8333H62.4592V26.8333ZM63.7143 25.8355L63.8096 24.8401L63.8095 24.8401L63.7143 25.8355ZM63.8577 25.8712L64.2401 24.9472L64.24 24.9472L63.8577 25.8712ZM26.833 26.8333V26.8333V24.8333C25.7284 24.8333 24.833 25.7287 24.833 26.8333H26.833ZM26.833 63.1666V26.8333H24.833V63.1666H26.833ZM26.833 63.1666H26.833H24.833C24.833 64.2712 25.7284 65.1666 26.833 65.1666V63.1666ZM63.1663 63.1666H26.833V65.1666H63.1663V63.1666ZM63.1663 63.1666V65.1666C64.2709 65.1666 65.1663 64.2712 65.1663 63.1666H63.1663ZM63.1663 48.7333V63.1666H65.1663V48.7333H63.1663ZM63.6663 49.2333C63.3902 49.2333 63.1663 49.0094 63.1663 48.7333H65.1663C65.1663 47.9048 64.4948 47.2333 63.6663 47.2333V49.2333ZM64.1663 48.7333C64.1663 49.0094 63.9425 49.2333 63.6663 49.2333V47.2333C62.8379 47.2333 62.1663 47.9048 62.1663 48.7333H64.1663ZM64.1663 63.1666V48.7333H62.1663V63.1666H64.1663ZM26.833 64.1666H63.1663V62.1666H26.833V64.1666ZM25.833 26.8333V63.1666H27.833V26.8333H25.833ZM41.2663 25.8333L26.833 25.8333L26.833 27.8333L41.2663 27.8333L41.2663 25.8333ZM40.7663 26.3333C40.7663 26.0571 40.9902 25.8333 41.2663 25.8333V27.8333C42.0948 27.8333 42.7663 27.1617 42.7663 26.3333H40.7663ZM41.2663 26.8333C40.9902 26.8333 40.7663 26.6094 40.7663 26.3333H42.7663C42.7663 25.5048 42.0948 24.8333 41.2663 24.8333V26.8333ZM26.833 26.8333H41.2663V24.8333H26.833V26.8333ZM64.8292 25.3857C64.7971 25.3464 64.763 25.3086 64.727 25.2726L63.3128 26.6868C63.3012 26.6752 63.2899 26.6628 63.2793 26.6497L64.8292 25.3857ZM65.1054 25.9806L64.9934 25.6742L63.1151 26.3611L63.2271 26.6675L65.1054 25.9806ZM65.1663 26.326L65.1662 26.3158L63.1663 26.3322L63.1664 26.3425L65.1663 26.326ZM65.1663 37.5333V26.3342H63.1663V37.5333H65.1663ZM63.6663 39.0333C64.4948 39.0333 65.1663 38.3617 65.1663 37.5333H63.1663C63.1663 37.2571 63.3902 37.0333 63.6663 37.0333V39.0333ZM62.1663 37.5333C62.1663 38.3617 62.8379 39.0333 63.6663 39.0333V37.0333C63.9425 37.0333 64.1663 37.2571 64.1663 37.5333H62.1663ZM62.1663 27.5404V37.5333H64.1663V27.5404H62.1663ZM42.327 49.7939L63.8734 28.2475L62.4592 26.8333L40.9128 48.3797L42.327 49.7939ZM40.2057 49.7939C40.7915 50.3797 41.7412 50.3797 42.327 49.7939L40.9128 48.3797C41.108 48.1844 41.4246 48.1844 41.6199 48.3797L40.2057 49.7939ZM40.2057 47.6726C39.6199 48.2584 39.6199 49.2081 40.2057 49.7939L41.6199 48.3797C41.8152 48.575 41.8152 48.8915 41.6199 49.0868L40.2057 47.6726ZM61.7521 26.1261L40.2057 47.6726L41.6199 49.0868L63.1663 27.5404L61.7521 26.1261ZM52.4663 27.8333H62.4592V25.8333H52.4663V27.8333ZM50.9663 26.3333C50.9663 27.1617 51.6379 27.8333 52.4663 27.8333V25.8333C52.7425 25.8333 52.9663 26.0571 52.9663 26.3333H50.9663ZM52.4663 24.8333C51.6379 24.8333 50.9663 25.5048 50.9663 26.3333H52.9663C52.9663 26.6094 52.7425 26.8333 52.4663 26.8333V24.8333ZM63.666 24.8333H52.4663V26.8333H63.666V24.8333ZM63.6663 24.8333H63.666V26.8333H63.6663V24.8333ZM63.8095 24.8401C63.7619 24.8355 63.7141 24.8333 63.6663 24.8333V26.8333C63.6505 26.8333 63.6347 26.8325 63.619 26.831L63.8095 24.8401ZM64.24 24.9472C64.1011 24.8897 63.9559 24.8541 63.8096 24.8401L63.619 26.831C63.5706 26.8264 63.5221 26.8146 63.4754 26.7952L64.24 24.9472ZM64.727 25.2726C64.5845 25.1301 64.4184 25.0209 64.2401 24.9472L63.4754 26.7952C63.4151 26.7702 63.3594 26.7334 63.3128 26.6868L64.727 25.2726Z' fill='%230F1022'/%3E%3C/svg%3E",
  name: "more",
  label: "More networks",
  showOpenInNewIcon: false,
  href: ADVANCE_TOOLS_HREF,
}

const MAINNET_MORE_NETWORKS = [ALGORAND, ACALA, SEI, MORE];
const TESTNET_MORE_NETWORKS = [ALGORAND, ACALA, MORE];

const TESTNET_TOKEN_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    Wsolana: {
      key: 'Wsolana',
      symbol: 'W',
      nativeChain: 'solana',
      tokenId: {
        chain: 'solana',
        address: 'EetppHswYvV1jjRWoQKC1hejdeBDHR9NNzNtCyRQfrrQ',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 6,
      },
    },
    Wsepolia: {
      key: 'Wsepolia',
      symbol: 'Ws',
      nativeChain: 'sepolia',
      tokenId: {
        chain: 'sepolia',
        address: '0x738141EFf659625F2eAD4feECDfCD94155C67f18',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Warbitrum_sepolia: {
      key: 'Warbitrum_sepolia',
      symbol: 'Ws',
      nativeChain: 'arbitrum_sepolia',
      tokenId: {
        chain: 'arbitrum_sepolia',
        address: '0x395D3C74232D12916ecA8952BA352b4d27818035',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Wbase_sepolia: {
      key: 'Wbase_sepolia',
      symbol: 'Ws',
      nativeChain: 'base_sepolia',
      tokenId: {
        chain: 'base_sepolia',
        address: '0x1d30E78B7C7fbbcef87ae6e97B5389b2e470CA4a',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Woptimism_sepolia: {
      key: 'Woptimism_sepolia',
      symbol: 'Ws',
      nativeChain: 'optimism_sepolia',
      tokenId: {
        chain: 'optimism_sepolia',
        address: '0xdDFeABcCf2063CD66f53a1218e23c681Ba6e7962',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
  },
  nttGroups: {
    W: {
      nttManagers: [
        {
          chainName: 'solana',
          address: 'NTtAaoDJhkeHeaVUHnyhwbPNAN6WgBpHkHBTc6d7vLK',
          tokenKey: 'Wsolana',
          transceivers: [
            {
              address: 'NTtAaoDJhkeHeaVUHnyhwbPNAN6WgBpHkHBTc6d7vLK',
              type: 'wormhole',
            },
          ],
          solanaQuoter: 'Nqd6XqA8LbsCuG8MLWWuP865NV6jR1MbXeKxD4HLKDJ',
        },
        {
          chainName: 'sepolia',
          address: '0x06413c42e913327Bc9a08B7C1E362BAE7C0b9598',
          tokenKey: 'Wsepolia',
          transceivers: [
            {
              address: '0x649fF7B32C2DE771043ea105c4aAb2D724497238',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'arbitrum_sepolia',
          address: '0xCeC6FB4F352bf3DC2b95E1c41831E4D2DBF9a35D',
          tokenKey: 'Warbitrum_sepolia',
          transceivers: [
            {
              address: '0xfA42603152E4f133F5F3DA610CDa91dF5821d8bc',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'base_sepolia',
          address: '0x8b9E328bE1b1Bc7501B413d04EBF7479B110775c',
          tokenKey: 'Wbase_sepolia',
          transceivers: [
            {
              address: '0x149987472333cD48ac6D28293A338a1EEa6Be7EE',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'optimism_sepolia',
          address: '0x27F9Fdd3eaD5aA9A5D827Ca860Be28442A1e7582',
          tokenKey: 'Woptimism_sepolia',
          transceivers: [
            {
              address: '0xeCF0496DE01e9Aa4ADB50ae56dB550f52003bdB7',
              type: 'wormhole',
            },
          ],
        },
      ],
    },
  },
}

const MAINNET_TOKEN_CONFIG: WormholeConnectConfig = {
  tokensConfig: {
    "ETHFIethereum": {
      key: "ETHFIethereum",
      symbol: "ETHFI",
      nativeChain: 'ethereum',
      tokenId: {
        chain: 'ethereum',
        address: '0xfe0c30065b384f05761f15d0cc899d4f9f9cc0eb',
      },
      icon: "https://assets.coingecko.com/coins/images/35958/standard/etherfi.jpeg?1710254562",
      coinGeckoId: "ether-fi",
      decimals: {
        default: 18,
        Ethereum: 18
      },
    },
    "ETHFIarbitrum": {
      key: "ETHFIarbitrum",
      symbol: "ETHFI",
      nativeChain: 'arbitrum',
      tokenId: {
        chain: 'arbitrum',
        address: '0x7189fb5B6504bbfF6a852B13B7B82a3c118fDc27',
      },
      icon: "https://assets.coingecko.com/coins/images/35958/standard/etherfi.jpeg?1710254562",
      coinGeckoId: "ether-fi",
      decimals: {
        default: 18,
        Arbitrum: 18
      },
    },
    WOM: {
      key: "WOM",
      symbol: "WOM",
      nativeChain: 'bsc',
      tokenId: {
        chain: 'bsc',
        address: '0xad6742a35fb341a9cc6ad674738dd8da98b94fb1',
      },
      icon: "https://assets.coingecko.com/coins/images/26946/standard/Wombat_Token.png?1696526001",
      coinGeckoId: "wombat-exchange",
      decimals: {
        default: 18
      },
      //Ehtereum, Avalanche, Base, Scroll, Optimism, Arbitrum, BNB Chain
      foreignAssets: {
        ethereum: {
          address: "0xc0B314a8c08637685Fc3daFC477b92028c540CFB",
          decimals: 18
        },
        avalanche: {
          address: "0xa15E4544D141aa98C4581a1EA10Eb9048c3b3382",
          decimals: 18
        },
        base: {
          address: "0xD9541B08B375D58ae104EC247d7443D2D7235D64",
          decimals: 18
        },
        scroll: {
          address: "0x1a7aD8A6171A1EA84DD1E6d649cbd616189660D9",
          decimals: 18
        },
        optimism: {
          address: "0xD2612B256F6f76feA8C6fbca0BF3166D0d13a668",
          decimals: 18
        },
        arbitrum: {
          address: "0x7B5EB3940021Ec0e8e463D5dBB4B7B09a89DDF96",
          decimals: 18
        }
      }
    },
    "USDC.e": {
      key: 'USDC.e',
      symbol: 'USDC.e',
      nativeChain: 'polygon',
      tokenId: {
        chain: 'polygon',
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      },
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' data-name='86977684-12db-4850-8f30-233a7c267d11' width='2000' height='2000' viewBox='0 0 2000 2000' style='max-height: 100%25%3b max-width: 100%25%3b'%3e%3cpath fill='%232775ca' d='M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z'%3e%3c/path%3e%3cpath fill='white' d='M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z'%3e%3c/path%3e%3cpath fill='white' d='M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zm441.67-1300c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z'%3e%3c/path%3e%3c/svg%3e",
      coinGeckoId: 'bridged-usdc-polygon-pos-bridge',
      color: '#FC8E03',
      decimals: {
        default: 6,
      },
      foreignAssets: {
        ethereum: {
          address: '0x566957eF80F9fd5526CD2BEF8BE67035C0b81130',
          decimals: 6,
        },
        bsc: {
          address: '0x672147dD47674757C457eB155BAA382cc10705Dd',
          decimals: 6,
        },
        avalanche: {
          address: '0x543672E9CBEC728CBBa9C3Ccd99ed80aC3607FA8',
          decimals: 6,
        },
        sui: {
          address:
            '0xcf72ec52c0f8ddead746252481fb44ff6e8485a39b803825bde6b00d77cdb0bb::coin::COIN',
          decimals: 6,
        },
        aptos: {
          address:
            '0xc7160b1c2415d19a88add188ec726e62aab0045f0aed798106a2ef2994a9101e::coin::T',
          decimals: 6,
        },
        arbitrum: {
          address: '0x9A3Fba8a0870Fb9765023681DAa5390C7919C916',
          decimals: 6,
        },
        fantom: {
          address: '0x6e0e8cf6Ad151e1260A4D398faaEDFC450A9f00a',
          decimals: 6,
        },
        base: {
          address: '0x59f4f969dd3A91A943651C9625E96822DC84Ef94',
          decimals: 6,
        },
        celo: {
          address: '0x0E21B5BdFb6eDBa7d903a610d4DE2F8c72586017',
          decimals: 6,
        },
      },
    },
    BONK: {
      key: 'BONK',
      symbol: 'BONK',
      nativeChain: 'solana',
      tokenId: {
        chain: 'solana',
        address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      },
      icon: "https://quei6zhlcfsxdfyes577gy7bkxmuz7qqakyt72xlbkyh7fysmoza.arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
      coinGeckoId: 'bonk',
      color: '#FC8E03',
      decimals: {
        default: 5,
      },
      foreignAssets: {
        ethereum: {
          address: '0x1151CB3d861920e07a38e03eEAd12C32178567F6',
          decimals: 5,
        },
        bsc: {
          address: '0xA697e272a73744b343528C3Bc4702F2565b2F422',
          decimals: 5,
        },
        polygon: {
          address: '0xe5B49820e5A1063F6F4DdF851327b5E8B2301048',
          decimals: 5,
        },
        avalanche: {
          address: '0xC07C98a93591504584738e4569928DDb3b9f12A7',
          decimals: 5,
        },
        sui: {
          address:
            '0x6907963ca849faff0957b9a8269a7a07065e3def2eef49cc33b50ab946ea5a9f::coin::COIN',
          decimals: 5,
        },
        aptos: {
          address:
            '0x2a90fae71afc7460ee42b20ee49a9c9b29272905ad71fef92fbd8b3905a24b56::coin::T',
          decimals: 5,
        },
        arbitrum: {
          address: '0x09199d9A5F4448D0848e4395D065e1ad9c4a1F74',
          decimals: 5,
        },
        wormchain: {
          address:
            'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
          decimals: 5,
        },
        osmosis: {
          address:
            'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
          decimals: 5,
        },
        fantom: {
          address: '0x3fEcdF1248fe7642d29f879a75CFC0339659ab93',
          decimals: 5,
        },
        base: {
          address: '0xDF1Cf211D38E7762c9691Be4D779A441a17A6cFC',
          decimals: 5,
        },
        celo: {
          address: '0x3fc50bc066aE2ee280876EeefADfdAbF6cA02894',
          decimals: 5,
        },
      },
    },
    Wsolana: {
      key: 'Wsolana',
      symbol: 'W',
      nativeChain: 'solana',
      tokenId: {
        chain: 'solana',
        address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 6,
      },
    },
    Wethereum: {
      key: 'Wethereum',
      symbol: 'W',
      nativeChain: 'ethereum',
      tokenId: {
        chain: 'ethereum',
        address: '0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Warbitrum: {
      key: 'Warbitrum',
      symbol: 'W',
      nativeChain: 'arbitrum',
      tokenId: {
        chain: 'arbitrum',
        address: '0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Woptimism: {
      key: 'Woptimism',
      symbol: 'W',
      nativeChain: 'optimism',
      tokenId: {
        chain: 'optimism',
        address: '0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    Wbase: {
      key: 'Wbase',
      symbol: 'W',
      nativeChain: 'base',
      tokenId: {
        chain: 'base',
        address: '0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91',
      },
      icon: 'https://assets.coingecko.com/coins/images/35087/standard/womrhole_logo_full_color_rgb_2000px_72ppi_fb766ac85a.png?1708688954',
      coinGeckoId: 'wormhole',
      decimals: {
        default: 18,
      },
    },
    osETHethereum: {
      key: 'osETHethereum',
      symbol: 'osETH',
      nativeChain: 'ethereum',
      tokenId: {
        chain: 'ethereum',
        address: '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38',
      },
      icon: 'https://coin-images.coingecko.com/coins/images/33117/large/Frame_27513839.png?1700732599',
      coinGeckoId: 'stakewise-staked-eth',
      decimals: {
        default: 18,
      },
    },
    osETHarbitrum: {
      key: 'osETHarbitrum',
      symbol: 'osETH',
      nativeChain: 'arbitrum',
      tokenId: {
        chain: 'arbitrum',
        address: '0xf7d4e7273E5015C96728A6b02f31C505eE184603',
      },
      icon: 'https://coin-images.coingecko.com/coins/images/33117/large/Frame_27513839.png?1700732599',
      coinGeckoId: 'stakewise-staked-eth',
      decimals: {
        default: 18,
      },
    },
    'wstETH ': {
      key: 'wstETH ',
      symbol: 'wstETH ',
      nativeChain: 'bsc',
      tokenId: {
        chain: 'bsc',
        address: '0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C',
      },
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9Im1heC1oZWlnaHQ6IDEwMCU7IG1heC13aWR0aDogMTAwJTsiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iMjU2IiBmaWxsPSIjMDBBM0ZGIj48L3JlY3Q+PHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMzYxLjAxMiAyMzcuODEyTDM2My44NzggMjQyLjIwOUMzOTYuMjA0IDI5MS43OTggMzg4Ljk4NCAzNTYuNzQyIDM0Ni41MiAzOTguMzQ4QzMyMS41MzkgNDIyLjgyNiAyODguNzk4IDQzNS4wNjYgMjU2LjA1NiA0MzUuMDY5QzI1Ni4wNTYgNDM1LjA2OSAyNTYuMDU2IDQzNS4wNjkgMzYxLjAxMiAyMzcuODEyWiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0yNTYuMDQ0IDI5Ny43NjRMMzYxIDIzNy44MTJDMjU2LjA0NSA0MzUuMDY5IDI1Ni4wNDQgNDM1LjA2OSAyNTYuMDQ0IDQzNS4wNjlDMjU2LjA0NCAzOTIuMTA4IDI1Ni4wNDQgMzQyLjg4IDI1Ni4wNDQgMjk3Ljc2NFoiIGZpbGw9IndoaXRlIj48L3BhdGg+PHBhdGggZD0iTTE1MC45ODggMjM3LjgxMkwxNDguMTIyIDI0Mi4yMDlDMTE1Ljc5NiAyOTEuNzk4IDEyMy4wMTYgMzU2Ljc0MiAxNjUuNDggMzk4LjM0OEMxOTAuNDYxIDQyMi44MjYgMjIzLjIwMiA0MzUuMDY2IDI1NS45NDQgNDM1LjA2OUMyNTUuOTQ0IDQzNS4wNjkgMjU1Ljk0NCA0MzUuMDY5IDE1MC45ODggMjM3LjgxMloiIGZpbGw9IndoaXRlIj48L3BhdGg+PHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMjU1LjkxNCAyOTcuNzY0TDE1MC45NTggMjM3LjgxMkMyNTUuOTE0IDQzNS4wNjkgMjU1LjkxNCA0MzUuMDY5IDI1NS45MTQgNDM1LjA2OUMyNTUuOTE0IDM5Mi4xMDggMjU1LjkxNCAzNDIuODggMjU1LjkxNCAyOTcuNzY0WiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0yNTYuMDgzIDE2My44MzNWMjY3LjIzM0wzNDYuNDkxIDIxNS41NjZMMjU2LjA4MyAxNjMuODMzWiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0yNTYuMDU2IDE2My44MzNMMTY1LjU4MyAyMTUuNTY1TDI1Ni4wNTYgMjY3LjIzM1YxNjMuODMzWiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBkPSJNMjU2LjA1NiA3Ni44NzVMMTY1LjU4MyAyMTUuNTk5TDI1Ni4wNTYgMTYzLjcyMlY3Ni44NzVaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTI1Ni4wODMgMTYzLjcwNkwzNDYuNTYgMjE1LjU4NUwyNTYuMDgzIDc2Ljc5MTZWMTYzLjcwNloiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9zdmc+Cgo=",
      coinGeckoId: 'wrapped-steth',
      color: '#3AA3FF',
      decimals: {
        default: 8,
        Ethereum: 18,
      },
    },
  },
  nttGroups: {
    W: {
      nttManagers: [
        {
          chainName: 'solana',
          address: 'NTtAaoDJhkeHeaVUHnyhwbPNAN6WgBpHkHBTc6d7vLK',
          tokenKey: 'Wsolana',
          transceivers: [
            {
              address: 'NTtAaoDJhkeHeaVUHnyhwbPNAN6WgBpHkHBTc6d7vLK',
              type: 'wormhole',
            },
          ],
          solanaQuoter: 'Nqd6XqA8LbsCuG8MLWWuP865NV6jR1MbXeKxD4HLKDJ',
        },
        {
          chainName: 'ethereum',
          address: '0xc072B1AEf336eDde59A049699Ef4e8Fa9D594A48',
          tokenKey: 'Wethereum',
          transceivers: [
            {
              address: '0xDb55492d7190D1baE8ACbE03911C4E3E7426870c',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'arbitrum',
          address: '0x5333d0AcA64a450Add6FeF76D6D1375F726CB484',
          tokenKey: 'Warbitrum',
          transceivers: [
            {
              address: '0xD1a8AB69e00266e8B791a15BC47514153A5045a6',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'optimism',
          address: '0x1a4F1a790f23Ffb9772966cB6F36dCd658033e13',
          tokenKey: 'Woptimism',
          transceivers: [
            {
              address: '0x9bD8b7b527CA4e6738cBDaBdF51C22466756073d',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'base',
          address: '0x5333d0AcA64a450Add6FeF76D6D1375F726CB484',
          tokenKey: 'Wbase',
          transceivers: [
            {
              address: '0xD1a8AB69e00266e8B791a15BC47514153A5045a6',
              type: 'wormhole',
            },
          ],
        },
      ],
    },
    osETH: {
      nttManagers: [
        {
          chainName: 'ethereum',
          address: '0x896b78fd7e465fb22e80c34ff8f1c5f62fa2c009',
          tokenKey: 'osETHethereum',
          transceivers: [
            {
              address: '0xAAFE766B966219C2f3F4271aB8D0Ff1883147AB6',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'arbitrum',
          address: '0x485F6Ac6a3B97690910C1546842FfE0629582aD3',
          tokenKey: 'osETHarbitrum',
          transceivers: [
            {
              address: '0xAf7ae721070c25dF97043381509DBc042e65736F',
              type: 'wormhole',
            },
          ],
        }
      ]
    },
    Lido_wstETH: {
      displayName: 'NTT: Wormhole + Axelar',
      nttManagers: [
        {
          chainName: 'ethereum',
          address: '0xb948a93827d68a82F6513Ad178964Da487fe2BD9',
          tokenKey: 'wstETH',
          transceivers: [
            {
              address: '0xA1ACC1e6edaB281Febd91E3515093F1DE81F25c0',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'bsc',
          address: '0x6981F5621691CBfE3DdD524dE71076b79F0A0278',
          tokenKey: 'wstETH ',
          transceivers: [
            {
              address: '0xbe3F7e06872E0dF6CD7FF35B7aa4Bb1446DC9986',
              type: 'wormhole',
            },
          ],
        },
      ],
    },
    "ETHFI": {
      nttManagers: [
        {
          chainName: 'ethereum',
          address: '0x344169Cc4abE9459e77bD99D13AA8589b55b6174',
          tokenKey: 'ETHFIethereum',
          transceivers: [
            {
              address: '0x3bf4AebcaD920447c5fdD6529239Ab3922ce2186',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'arbitrum',
          address: '0x90A82462258F79780498151EF6f663f1D4BE4E3b',
          tokenKey: 'ETHFIarbitrum',
          transceivers: [
            {
              address: '0x4386e36B96D437b0F1C04A35E572C10C6627d88a',
              type: 'wormhole',
            },
          ],
        }
      ]
    }
  },

}


// https://vitejs.dev/config/
export default defineConfig({
  ...viteConfig,
  define: {
    ...viteConfig?.define,
    navBar: [
      { label: "Home", active: true, href: `${PUBLIC_URL}/` },
      { label: "Staking", href: "https://www.tally.xyz/gov/wormhole", isBlank: true },
      { label: "USDC", href: USDC_BRIDGE_HREF },
      { label: "Privacy Policy", href: PRIVACY_POLICY_HREF },
    ],
    redirects: {
      source: [
        "#/nft",
        "#/redeem",
        "#/nft-origin-verifier",
        "#/token-origin-verifier",
        "#/register",
        "#/migrate/Ethereum/:legacyAsset/",
        "#/migrate/BinanceSmartChain/:legacyAsset/",
        "#/migrate/Celo/:legacyAsset/",
        "#/migrate/Ethereum/",
        "#/migrate/BinanceSmartChain/",
        "#/migrate/Celo/",
        "#/stats",
        "#/withdraw-tokens-terra",
        "#/unwrap-native",
        "#/custody-addresses"
      ],
      target: ADVANCE_TOOLS_HREF
    },
    wormholeConnectConfig: {
      ...viteConfig?.define?.wormholeConnectConfig,
      cctpWarning: {
        href: USDC_BRIDGE_HREF
      },
      networks: [...chains, "solana", "injective", "klaytn"],
      moreNetworks: {
        href: ADVANCE_TOOLS_HREF_TEMPLATE,
        target: "_blank",
        description: "Advance Tools offers unlimited transfers across chains for tokens and NFTs wrapped by Wormhole.",
        networks: process.env.VITE_APP_CLUSTER === 'mainnet' ? MAINNET_MORE_NETWORKS : TESTNET_MORE_NETWORKS,
      },
      moreTokens: {
        label: "More tokens ...",
        href: ADVANCE_TOOLS_HREF_TEMPLATE,
      },
      ...(process.env.VITE_APP_CLUSTER === 'mainnet' ? MAINNET_TOKEN_CONFIG : TESTNET_TOKEN_CONFIG)
    }
  }
})