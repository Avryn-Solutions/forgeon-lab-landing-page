import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { Home } from './home';

describe('Character introduction', () => {
  it('pauses the scene and resumes all animations when replaying', async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const art = element.querySelector('.hero-art') as HTMLElement;
    const animation = { cancel: vi.fn(), play: vi.fn() };
    Object.defineProperty(art, 'getAnimations', { value: vi.fn(() => [animation]) });
    const controls = element.querySelectorAll<HTMLButtonElement>('.arrival-controls button');
    controls[1].click();
    fixture.detectChanges();
    expect(art.classList.contains('motion-paused')).toBe(true);
    expect(controls[1].getAttribute('aria-pressed')).toBe('true');
    controls[0].click();
    fixture.detectChanges();
    expect(art.classList.contains('motion-paused')).toBe(false);
    expect(animation.cancel).toHaveBeenCalledOnce();
    expect(animation.play).toHaveBeenCalledOnce();
    expect(art.getAnimations).toHaveBeenCalledWith({ subtree: true });
  });
});
