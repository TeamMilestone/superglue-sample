import React from 'react'
import Dialog from './Dialog'
import ButtonTo from './ButtonTo'
import SVG from 'react-inlinesvg';
import closeSvg from '../assets/images/icons/x-circle.svg'

export default class extends React.Component {
  render () {
    const {
      sectionName,
      rowNumber,
      price,
      seatSelectionForm
    } = this.props

    return (
      <Dialog>
        <header className="syos-dialog__header">
          <h2 className="syos-dialog__title">
            Confirm seat selection
          </h2>

          <form method="dialog">
            <button className="syos-button syos-button--transparent">
              <SVG src={ closeSvg } />
            </button>
          </form>
        </header>
        <section className="syos-dialog__body">
          <dl className="syos-grid syos-grid--2">
            <div>
              <dt>
                Section
              </dt>

              <dd className="syos-u-font-size-large">
                { sectionName }
              </dd>
            </div>

            <div>
              <dt>
                Seat
              </dt>

              <dd className="syos-u-font-size-large">
                { rowNumber }
              </dd>
            </div>
          </dl>
        </section>
        <footer className="syos-dialog__footer syos-block-stack syos-block-stack--bordered syos-block-stack--large">
          <div className="syos-inline-stack syos-inline-stack--inline syos-block-stack__item">
            <div className="syos-inline-stack__item">
              <p className="syos-u-margin-bottom-0">
                { sectionName }
              </p>
            </div>

            <div className="syos-inline-stack__item syos-inline-stack__item--push-start">
              <p className="syos-u-margin-bottom-0">
                <strong> { price } </strong>
              </p>
            </div>

            <div className="syos-inline-stack__item" >
              <ButtonTo {...seatSelectionForm} data-sg-visit={true}/>
            </div>
          </div>
        </footer>
      </Dialog>
    )
  }
}

