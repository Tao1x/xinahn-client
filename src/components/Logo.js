import React from 'react';

import './Logo.css';
const imgSrc = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0M0I4QzEzRkJERjExRTlCODlBQUVGODRDQTRDNTJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0M0I4QzE0RkJERjExRTlCODlBQUVGODRDQTRDNTJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjg5OERFQjJGQkRDMTFFOUI4OUFBRUY4NENBNEM1MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTQzQjhDMTJGQkRGMTFFOUI4OUFBRUY4NENBNEM1MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8N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'

class Logo extends React.Component {
  componentDidMount = () => {
    const animatedLogoEls = document.querySelectorAll('.logoContainer')

    let loaded = 0
    let position = 1050

    let bgWidth
    const image = new Image()
    image.onload = function() {
      loaded += 1
      bgWidth = this.width
      load()
    }
    image.src = imgSrc;

    let maskWidth
    let maskHeight
    const mask = new Image()
    mask.onload = function() {
      loaded += 1
      maskWidth = this.width
      maskHeight = this.height
      load()
    }
    mask.src = 'data:image/png;base64,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'
    const load = () => {
      if (loaded < 2) return

      start()
    }

    const start = () => {
      animatedLogoEls.forEach((el) => {
        el.style.setProperty('--aspect-ratio', maskHeight / maskWidth)

        const canvas = el.querySelector('#logoAnimated')
        const context = canvas.getContext('2d')

        const frame = () => {
          requestAnimationFrame(() => {
            if (document.scrollingElement.scrollTop < window.outerHeight) {
              position = (position + .6) % bgWidth
              draw()
            }
            frame()
          })
        }

        const draw = () => {
          canvas.width = maskWidth
          canvas.height = maskHeight

          context.drawImage(image,         - position, 0, bgWidth, maskHeight)
          context.drawImage(image, bgWidth - position, 0, bgWidth, maskHeight)

          context.globalCompositeOperation = 'xor'
          context.drawImage(mask, 0, 0, maskWidth, maskHeight)
        }

        frame()
        draw()
      })
    }
  }
  render = () => {
    return (
      <div className="logoSection">
        <div className="logoOuterContainer logoContainer">
          <div className="logoInnerContainer logoContainer">
            <canvas id="logoAnimated" />
          </div>
        </div>
      </div>
    )
  }
}

export default Logo;