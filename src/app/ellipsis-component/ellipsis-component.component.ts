import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, HostListener, Input, OnChanges, Self, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ellipsis-component',
  host: {
    "[title]": "fullText"
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ellipsis-component.component.html',
  styleUrls: ['./ellipsis-component.component.scss']
})
export class EllipsisComponentComponent implements OnChanges {
  @Input() text: string = '';
  public fullText!: string;
  public leftText!: string;
  public rightText!: string;

  private resizeTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(@Host() @Self() private readonly hostElement: ElementRef,private cdr:ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.rightText = this.fullText;
    this.leftText = '';
    setTimeout(() => this.myAwesomeSplit(), 150);
  }

  @HostListener('window:resize', ['event']) // TODO look at the event argument is it correct
  onResize() {
    // debounce
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => this.myAwesomeSplit(), 150);
  }

  // set text(value: string) {
  //   // var splitValue = this.splitWithPercentage(value);
  //   this.fullText = value;
  //   // this.leftText = value.slice(0, splitValue);
  //   // this.rightText = value.slice(splitValue);
  // }

  splitWithLastSegment(value: string): number {
    return value.length - value.split("/").pop()?.length!;
  }

  splitWithPercentage(value: string): number {
    return Math.round(value.length * 0.5);
  }

  private myAwesomeSplit() {
    console.log('here');
    const el = this.hostElement.nativeElement as HTMLDivElement;
    const parent = el?.closest('mat-select-trigger') as HTMLDivElement;
    
    if (!el || !parent) {
      return;
    }
    if(parent.style.display !== 'block'){
      parent.style.display = 'block';
      setTimeout(() => this.myAwesomeSplit(), 100);
      return;
    }
    const parentWidth = parent.getBoundingClientRect().width;
    const elWidth = el.getBoundingClientRect().width;
    
    const fontScalingFactor = 6.8; //? Don't question me on this, If you want figure on your own

    console.log(elWidth,parentWidth)
    if (elWidth <= parentWidth) {
      this.leftText = '';
      this.rightText = this.fullText;
    } else {
      const charsWeCanAccomodate = parentWidth / fontScalingFactor;
      const splitRatio = Math.ceil(charsWeCanAccomodate / 2);

      const buffer = 0;

      const startPosition = 0; // TODO to figure out this by scanning folders in front
      this.leftText = this.fullText.slice(0, splitRatio - startPosition + buffer);
      this.rightText = this.fullText.slice(-splitRatio + startPosition);
    }
    console.log(this.leftText, '.....', this.rightText);
  }

}
