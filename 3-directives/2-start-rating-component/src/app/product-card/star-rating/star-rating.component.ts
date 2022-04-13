import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-shop-star-rating',
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	@Input()
	public feedbackRate: any;
}
