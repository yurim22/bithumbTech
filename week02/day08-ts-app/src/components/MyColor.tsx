import * as React from "react";

interface Iprops {
  kind: string;
  desc: string;
}

// type Iprops = {
//   kind: string;
//   desc: string
// }

function MyColor(props: Iprops) {
  return (
    <div>
      종류 : {props.kind}
      <br />
      부연 설명 : {props.desc}
    </div>
  )
}

export default MyColor;
