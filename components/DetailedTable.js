import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useCallback,
} from "react";
import styled from "styled-components";
import float from "./NumberFormatter/service.ts";

import Row from "./Row";
import Table from "./Table";
// import { Container } from './styles';
// import { Props } from './types';

// const Container = styled.div`
//   width: 100%;
//   padding: 0px 2.4rem;
// `;
console.log("FLOAT", float);

const DetailedTable = ({ rows, model, serie, colors }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              <strong>Modelo</strong>
            </th>
            <th>
              <strong>{model}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <Row label="Série" value={serie} />
          <Row label="Cores" value={colors?.join(", ")} />
          {rows?.map(({ key, label, value, unit, precision }) => (
            <Row
              key={key}
              label={label}
              value={
                unit || precision ? float.float(value, unit, precision) : value
              }
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DetailedTable;

// const DetailedTable: FunctionComponent<Props> = ({ className, rows, model, serie, colors }) => {
//   const [open, setOpen] = useState(false);

//   const toggle = useCallback((event: MouseEvent<HTMLElement>) => {
//     event.preventDefault();
//     setOpen((open) => !open);
//   }, []);

//   return (
//     <Container>
//       <details className={className} open={open}>
//         <summary onClick={toggle}>
//           Tabela Detalhada
//           <span
//             className={classnames({
//               controller: true,
//               open
//             })}
//           >
//             &#43;
//           </span>
//         </summary>

//         <Table>
//           <thead>
//             <tr>
//               <th><strong>Modelo</strong></th>
//               <th><strong>{model}</strong></th>
//             </tr>
//           </thead>
//           <tbody>
//             <Row label="Série" value={serie} />
//             <Row label="Cores" value={colors?.join(', ')} />
//             {rows?.map(({ key, label, value, unit, precision }) => (
//               <Row
//                 key={key}
//                 label={label}
//                 value={unit || precision
//                   ? NumberFormatter.float(value, unit, precision)
//                   : value
//                 }
//               />
//             ))}
//           </tbody>
//         </Table>
//       </details>
//     </Container>
//   );
// };
