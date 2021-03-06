const svg = (color?: string, iconSize: number = 0): string => {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width='${iconSize}vw' height='${iconSize * 1.6}vw' viewBox="0 0 14 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g  transform="translate(-343.000000, -2503.000000)">
                <g  transform="translate(100.000000, 2404.000000)">
                    <g  transform="translate(238.000000, 98.000000)">
                        <g>
                            <rect id="Rectangle-Copy-119" x="0" y="0" width="24" height="24"></rect>
                            <path d="M16,1 L8,1 C6.34,1 5,2.34 5,4 L5,20 C5,21.66 6.34,23 8,23 L16,23 C17.66,23 19,21.66 19,20 L19,4 C19,2.34 17.66,1 16,1 Z M13.5,21 L10.5,21 C10.22,21 10,20.78 10,20.5 C10,20.22 10.22,20 10.5,20 L13.5,20 C13.78,20 14,20.22 14,20.5 C14,20.78 13.78,21 13.5,21 Z M17,18 L7,18 L7,4 L17,4 L17,18 Z" id="phone-color-5488" fill=${color}></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  `
}

export default svg






