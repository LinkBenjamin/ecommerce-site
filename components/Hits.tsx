import { connectHits, connectRefinementList } from "react-instantsearch-dom";
import { Item } from "./Item";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/states";

export const Hits = connectHits(({ hits }) => {
  const [cart] = useRecoilState(cartState);
  const objs = Object.keys(cart || {});

  return hits.map((hit) => (
    <Item
      key={hit.objectID}
      idx={hit.objectID}
      title={hit.name}
      price={hit.price.value}
      src={_.get(hit, "images[0].url")}
      item={hit}
      inCart={objs.includes(hit.objectID)}
      brand={hit.brand}
    />
  ));
});

export const RefinementList = connectRefinementList(() => null);
