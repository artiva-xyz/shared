import { createContext } from "react";
import { NFTStrategy } from "@zoralabs/nft-hooks/dist/strategies";
import { IMarketAdapter } from "../types";
import { RendererConfig } from "../types/adapters/RendererConfig";
import { ChainIdentifier } from "../types/nft/ChainIdentifier";
import { NFTContractStrategy } from "../types/nft/NFTContractStrategy";
import { IPrimarySaleAdapter } from "../types/adapters";

export type SharedConfigType = {
  serverURL?: string;
  preferredIPFSGateway?: string;
  zoraAPIKey?: string;
  platformAddress?: string;
  getNFTStrategy?: (chainId: ChainIdentifier) => NFTStrategy;
  getNFTContractStrategy?: (chainId: ChainIdentifier) => NFTContractStrategy;
  marketAdapters?: IMarketAdapter[];
  primarySaleAdapters?: IPrimarySaleAdapter[];
  renderers?: RendererConfig[];
};

export default createContext<SharedConfigType>({});
