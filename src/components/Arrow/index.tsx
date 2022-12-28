import styled from 'styled-components'

const Line = styled.path`
  stroke: ${({ theme }) => theme.cornerItem.arrow};
`

export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.256"
      height="18.256"
      viewBox="0 0 18.256 18.256"
    >
      <g data-name="Group 7" transform="translate(5.363 5.325)">
        <Line
          id="Path_10"
          data-name="Path 10"
          d="M14.581,7.05,7.05,14.581"
          transform="translate(-7.05 -7.012)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        ></Line>
        <Line
          id="Path_11"
          data-name="Path 11"
          d="M10,7l5.287.037.038,5.287"
          transform="translate(-7.756 -7)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        ></Line>
      </g>
      <path
        id="Path_12"
        data-name="Path 12"
        d="M0,0H18.256V18.256H0Z"
        fill="none"
      ></path>
    </svg>
  )
}
