import { FC } from "react"

interface LearnTimeSVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const LearnTimeSVG: FC<LearnTimeSVGProps> = ({ theme, scale = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 464 400"
      width={464 * scale}
      height={400 * scale}
    >
      <path d="M21.55 213.32c-12.33-32.823-8.656-63.425 10.92-92.015 1.926-2.812 3.342-5.636 4.34-8.83 10.934-35.009 42.406-58.842 79.05-59.78 2.956-.076 5.08-.876 6.72-3.352 19.398-29.303 59.083-41.137 92.109-31.58 7.085 2.05 14 4.477 20.122 8.594 2.66 1.788 4.47 1.532 7.11-.003 16.016-9.306 33.607-13.987 51.77-11.389 22.547 3.225 41.662 13.768 54.17 33.835 1.873 3.006 4.028 4.4 7.496 4.81 32.429 3.831 56.726 20.301 70.713 49.544 6.175 12.913 14.623 24.48 20.036 37.68 17.999 43.886 1.89 100.067-43.145 120.796-6.514 2.997-13.29 5.242-20.57 5.778-6.058.446-9.406 5.27-9.252 13.647.132 7.209-.113 14.31-2.46 21.193-8.76 25.694-26.279 42.427-52.201 50.077-5.46 1.61-7.639 3.848-7.186 9.62.52 6.623-.006 13.323.092 19.988.07 4.789-.77 9.107-5.564 11.314-4.852 2.235-8.734-.233-12.233-3.27-11.704-10.156-23.266-20.476-35.024-30.568-13.005-11.163-27.127-21.117-37.55-35.033-1.647-2.199-3.567-1.826-5.785-1.237-12.2 3.241-24.636 4.316-37.119 2.604-29.097-3.99-50.08-20.005-63.738-45.418-4.515-8.4-8.873-12.257-19.425-12.93-35.256-2.248-58.827-22.17-73.396-54.075m300.013 112.766c14.555-7.27 23.875-18.526 27.252-35.764-3.761 0-6.855.076-9.944-.015-6.328-.188-10.96-4.832-11.177-11.096-.194-5.608 4.457-10.917 10.299-11.48 2.81-.272 5.684-.358 8.487-.086 4.071.396 6.084-1.514 7.378-5.12 2.278-6.352 3.221-12.813 3.134-19.573-.291-22.734-20.325-43.34-43.052-43.748-12.994-.232-25.996-.002-38.993-.08-2.693-.015-4.644.849-6.547 2.834-10.072 10.509-22.044 18.067-36.65 19.722-9.886 1.12-20.011 1.082-29.953.42-7.574-.504-11.635 2.102-14.3 9.013-2.503 6.494-5.238 13.006-9.258 18.788-2.668 3.839-6.53 5.752-11.206 5.153-4.85-.62-7.604-3.955-8.943-8.383-1.086-3.592-.923-7.2.841-10.679 2.411-4.754 4.48-9.692 7.068-14.344 5.865-10.541 7.118-22.013 5.33-33.459-3.863-24.736-32.278-42.559-56.355-35.553-13.643 3.97-23.887 11.532-24.84 27.536-.404 6.789-6.982 11.659-13.241 10.851-6.515-.84-11.71-8.218-10.801-15.13 2.53-19.246 13.18-32.594 29.977-41.529 5.297-2.818 10.994-4.59 17.307-6.384-6.607-16.083-7.319-32.442-3.386-48.997-13.142-2.519-35.268 10.42-42.56 24.427 1.305.34 2.595.627 3.855 1.012 6.296 1.92 10.662 7.569 9.868 12.729-.946 6.142-6.44 11.365-12.96 10.985-8.873-.516-14.433 4.144-19.067 10.605-7.193 10.028-10.392 21.405-11.13 33.649-1.755 29.151 12.189 53.691 37.836 65.848 8.29 3.93 17.03 6.196 26.678 5.676.288-6.158-.26-12.034 1.46-17.676 3.863-12.675 9.796-24.408 16.575-35.71 3.492-5.82 9.891-7.381 15.591-4.353 5.112 2.717 7.53 9.344 5.084 15.057-1.829 4.275-4.156 8.341-6.353 12.452-6.392 11.963-9.736 24.569-6.378 38.007 6.032 24.146 19.828 41.472 44.552 48.622 9.782 2.828 19.702 1.976 29.697 1.483 11.458-.564 11.477-.17 11.818-11.29.02-.665 0-1.34.1-1.995.506-3.342-.233-5.073-4.273-5.37-6.13-.45-10.774-6.267-10.468-12 .33-6.173 4.879-10.804 11.262-11.305 2.487-.195 5.021-.351 7.49-.097 4.611.474 7.667-1.26 10.539-4.98 9.98-12.923 23.039-21.142 39.391-23.22 15.58-1.978 31.277-.883 46.909-.593 6.915.128 11.32 6.278 10.809 13.106-.469 6.251-6.33 11.14-13.409 10.704-12.166-.75-24.318.05-36.453.374-24.269.65-41.846 23.509-36.984 47.319 3.362 16.46 17.811 28.28 34.604 28.294 8.5.007 17.003-.184 25.496.05 7.499.209 14.513-1.455 21.994-4.707M258.93 78.566c-6.877-9.15-15.793-13.957-27.484-13.362-5.483.279-11.004.164-16.492-.098-5.403-.258-9.233-3.415-10.3-7.933-1.114-4.722 1.068-9.572 5.528-12.334.916-.567 2.359-.569 2.42-2.118-.294-.226-.53-.48-.82-.616-.753-.35-1.508-.718-2.3-.957-23.075-6.982-43.398-2.003-60.954 14.315-18.485 17.182-22.771 47.838-9.932 69.379 1.456 2.441 3.404 3.948 6.089 4.8a82.845 82.845 0 0 1 17.709 8.028c5.505 3.32 10.038 6.958 17.78 4.605 6.555-1.992 14.204-.369 21.37-.372 9.304-.005 12.975-3.75 13.2-12.96.165-6.804-.846-13.678.74-20.405 1.327-5.638 5.836-9.488 10.727-9.552 5.317-.07 10.528 3.577 11.368 9.378 1.43 9.885 2.078 20.142-.061 29.805-4.429 20.005-22.05 29.251-36.794 28.253-3.858-.261-7.86-.812-11.647.385-.055.648-.195 1.01-.095 1.286 3.182 8.754 6.63 17.427 6.447 27.003-.056 2.926 2.329 2.818 4.331 2.814 8.33-.02 16.676.196 24.99-.218 14.117-.703 25.077-7.069 32.512-19.26.99-1.622 1.582-3.261 1.532-5.164-.263-10.043 2.686-19.376 6.29-28.578 2.488-6.354 4.918-12.71 5.347-19.666 1.017-16.457-.048-32.367-11.5-46.458m104.993.922c-3.536.098-6.979-2.321-10.872-.482.874 5.201 1.42 10.298 1.193 15.471-1.101 24.972-16.97 44.759-39.74 49.23-6.417 1.26-12.956.27-19.433.511-1.922.071-4.087-.463-4.976 2.176a265.796 265.796 0 0 0-7.546 27.036c1.383 1.197 2.582.663 3.707.69 11.81.284 23.822-.725 35.396 1.078 32.834 5.115 56.026 31.203 58.628 64.52.259 3.314 1.41 3.86 4.41 3.136 9.13-2.207 17.113-6.563 23.833-12.983 19.01-18.162 25.195-40.585 20.727-66.048-1.996-11.376-7.383-21.267-15.766-29.468-6.378-6.24-14.115-6.359-22.282-6.194-5.828.117-10.37-4.578-11.227-10.2-.837-5.49 2.491-10.776 7.974-13.001 3.26-1.322 6.685-.904 10.6-.911-8.698-12.54-20.077-20.103-34.626-24.561M322.31 57.582c1.572-2.322-.74-3.21-1.806-4.272-10.438-10.393-23.085-15.588-37.8-14.85-8.063.405-15.99 2.064-23.05 6.407.307.74.35 1.135.57 1.32a178.42 178.42 0 0 0 4.264 3.442c19.755 15.564 28.94 36.313 29.756 61.07.328 9.957-1.258 8.951 9.19 8.972 9.036.018 17.116-2.071 22.509-10.255 3.613-5.484 5.026-11.66 5.28-17.955.316-7.87-1.087-8.868-9.017-9.013-5.35-.097-9.184-2.669-11.339-7.537-3.235-7.31 1.48-14.731 11.443-17.33z" />
      <path d="M296.569 292.813c1.224 8.281-2.978 14.523-10.277 15.822-5.905 1.05-11.874-3.227-13.626-9.764-1.775-6.621 1.854-13.527 8.153-15.518 6.978-2.206 12.684 1.106 15.75 9.46zM173.378 110.17c-6.425-1.646-9.808-5.828-10.442-11.716-.548-5.082 1.652-9.513 6.146-12.247 4.312-2.624 8.903-2.72 13.122.257 4.255 3.003 6.366 7.344 5.619 12.503-.768 5.303-3.798 9.171-9.138 10.728-1.552.452-3.26.369-5.307.475zM364.191 149.877c7.616-.01 14.757-.094 21.896-.006 7.968.098 13.608 5.595 13.03 12.522-.626 7.501-6.632 11.797-14.662 11.278-6.94-.449-13.957-.486-20.893-.01-8.228.563-14.27-3.52-14.864-10.888-.595-7.4 4.135-12.267 12.527-12.869.827-.06 1.66-.018 2.966-.027z" />
    </svg>
  )
}
