import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Player } from '@interfaces/player.interface';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemsComponent<T> {
  @Input()
  public columns: Array<string> = [];

  @Input()
  public items: Array<T> = [];

  @Output()
  public removeItem: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public selectItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public trackBy(index, item): number {
    return item.id;
  }

  public onRemoveItem(id: number): void {
    this.removeItem.emit(id);
  }

  public onSelectItem(id: number): void {
    this.selectItem.emit(id);
  }
}
