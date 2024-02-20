import {
  PositionDecrease,
  PositionIncrease,
  Transaction,
} from "../../generated/schema";
import { EventData1 } from "../utils/eventData1";

export function savePositionIncrease(
  eventData: EventData1,
  transaction: Transaction
): PositionIncrease {
  let orderKey = eventData.getBytes32Item("orderKey")!.toHexString();
  let entity = new PositionIncrease(orderKey);

  entity.orderKey = orderKey;
  entity.positionKey = eventData.getBytes32Item("positionKey")!.toHexString();

  entity.account = eventData.getAddressItemString("account")!;
  entity.marketAddress = eventData.getAddressItemString("market")!;
  entity.collateralTokenAddress =
    eventData.getAddressItemString("collateralToken")!;

  entity.collateralTokenPriceMin = eventData.getUintItem(
    "collateralTokenPrice.min"
  )!;

  entity.collateralTokenPriceMax = eventData.getUintItem(
    "collateralTokenPrice.max"
  )!;

  entity.sizeInUsd = eventData.getUintItem("sizeInUsd")!;
  entity.sizeInTokens = eventData.getUintItem("sizeInTokens")!;
  entity.collateralAmount = eventData.getUintItem("collateralAmount")!;

  entity.sizeDeltaUsd = eventData.getUintItem("sizeDeltaUsd")!;
  entity.sizeDeltaInTokens = eventData.getUintItem("sizeDeltaInTokens")!;
  entity.collateralDeltaAmount = eventData.getIntItem("collateralDeltaAmount")!;
  entity.borrowingFactor = eventData.getUintItem("borrowingFactor")!;

  entity.executionPrice = eventData.getUintItem("executionPrice")!;
  entity.fundingFeeAmountPerSize = eventData.getUintItem(
    "fundingFeeAmountPerSize"
  )!;
  entity.indexTokenPriceMax = eventData.getUintItem("indexTokenPrice.max")!;
  entity.indexTokenPriceMin = eventData.getUintItem("indexTokenPrice.min")!;

  // entity.longTokenFundingAmountPerSize = eventData.getIntItem(
  //   "longTokenClaimableFundingAmountPerSize"
  // )!;
  // entity.shortTokenFundingAmountPerSize = eventData.getIntItem(
  //   "shortTokenClaimableFundingAmountPerSize"
  // )!;
  entity.priceImpactAmount = eventData.getIntItem("priceImpactAmount")!;
  entity.priceImpactUsd = eventData.getIntItem("priceImpactUsd")!;
  // entity.basePnlUsd = eventData.getIntItem("basePnlUsd")!;

  entity.orderType = eventData.getUintItem("orderType")!;
  entity.isLong = eventData.getBoolItem("isLong");

  entity.transaction = transaction.id;

  entity.save();

  return entity;
}

export function savePositionDecrease(
  eventData: EventData1,
  transaction: Transaction
): PositionDecrease {
  let orderKey = eventData.getBytes32Item("orderKey")!.toHexString();

  let entity = new PositionDecrease(orderKey);

  entity.orderKey = orderKey;
  entity.positionKey = eventData.getBytes32Item("positionKey")!.toHexString();

  entity.account = eventData.getAddressItemString("account")!;
  entity.marketAddress = eventData.getAddressItemString("market")!;
  entity.collateralTokenAddress =
    eventData.getAddressItemString("collateralToken")!;

  entity.collateralTokenPriceMin = eventData.getUintItem(
    "collateralTokenPrice.min"
  )!;

  entity.collateralTokenPriceMax = eventData.getUintItem(
    "collateralTokenPrice.max"
  )!;

  entity.sizeInUsd = eventData.getUintItem("sizeInUsd")!;
  entity.sizeInTokens = eventData.getUintItem("sizeInTokens")!;
  entity.collateralAmount = eventData.getUintItem("collateralAmount")!;

  entity.sizeDeltaUsd = eventData.getUintItem("sizeDeltaUsd")!;
  entity.sizeDeltaInTokens = eventData.getUintItem("sizeDeltaInTokens")!;
  entity.collateralDeltaAmount = eventData.getUintItem(
    "collateralDeltaAmount"
  )!;
  entity.borrowingFactor = eventData.getUintItem("borrowingFactor")!;
  entity.priceImpactDiffUsd = eventData.getUintItem("priceImpactDiffUsd")!;
  entity.priceImpactUsd = eventData.getIntItem("priceImpactUsd")!;

  entity.executionPrice = eventData.getUintItem("executionPrice")!;

  entity.longTokenFundingAmountPerSize = eventData.getIntItem(
    "longTokenFundingAmountPerSize"
  )!;
  entity.shortTokenFundingAmountPerSize = eventData.getIntItem(
    "shortTokenFundingAmountPerSize"
  )!;
  entity.priceImpactAmount = eventData.getIntItem("priceImpactAmount")!;
  entity.basePnlUsd = eventData.getIntItem("basePnlUsd")!;

  entity.orderType = eventData.getUintItem("orderType")!;
  entity.isLong = eventData.getBoolItem("isLong");

  entity.transaction = transaction.id;

  entity.save();

  return entity;
}
