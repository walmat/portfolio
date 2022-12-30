import styled from 'styled-components'

const Line = styled.line`
  stroke: ${({ theme }) => theme.cornerItem.arrow};
`

export const Close = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.644"
      height="11.385"
      viewBox="0 0 11.644 11.385"
    >
      <g
        id="Group_40"
        data-name="Group 40"
        transform="translate(-954.372 -59.349)"
      >
        <g
          id="Group_39"
          data-name="Group 39"
          transform="translate(-6035.801 -1683.588)"
        >
          <Line
            id="Line_6"
            data-name="Line 6"
            y2="12.101"
            transform="translate(7000.403 1744.351) rotate(45)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2"
          ></Line>
          <Line
            id="Line_7"
            data-name="Line 7"
            y2="12.101"
            transform="translate(7000.144 1752.908) rotate(135)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2"
          ></Line>
        </g>
      </g>
    </svg>
  )
}
