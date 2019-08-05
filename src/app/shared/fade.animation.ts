// fade.animation.ts

import { trigger, animate, transition, style, query, group, AnimationOptions } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition('* => profile', [
            query(':enter',
                style({
                    position: 'fixed'
                })
            ),
            query(':leave',
                style({
                    position: 'fixed',
                    opacity: 1,
                    transform: 'translateY(-10%)',
                    'transform-origin': 'left top'
                }),
                { optional: true }),
            query('.transition-scale-in', [
                style({
                    opacity: 0,
                    transform: 'scale(0.01)'
                })]
            ),
            query('.transition-scale-in-1', [
                style({
                    opacity: 0,
                    transform: 'scale(0.01)'
                })], { optional: true }
            ),
            query('.transition-right-to-left', [
                style({
                    opacity: 0,
                    transform: 'translateX(+100%)'
                })]
            ),
            query('.transition-right-to-left-200', [
                style({
                    opacity: 0,
                    transform: 'translateX(+200%)'
                })], { optional: true }
            ),
            query('.transition-left-to-right', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                })]
            ),
            query('.transition-left-to-right-abs', [
                style({
                    transform: 'translateX(-100%)'
                })], { optional: true }
            ),
            query('.transition-bot-to-top-abs', [
                style({
                    transform: 'translateY(150%)'
                })], { optional: true }
            ),
            query('.transition-top-to-bot-abs', [
                style({
                    transform: 'translateY(-100%)'
                })], { optional: true }
            ),
            query('.progress-ring__circle', [
                style({
                    'stroke-dashoffset': '326.726'
                })], { optional: true }
            ),
            query('.profile-image',
                style({
                    position: 'fixed',
                    top: '12px',
                    left: '32px',
                    width: '40px',
                    height: '40px'
                })
            ),
            query('.fade-in',
                style({
                    opacity: 0
                })
            ),
            group([
                query('.profile-image',
                    animate('0.5s ease', style({
                        'background-image': 'url("assets/profile-image.jpg")',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center',
                        'border-radius': '10px',
                        'width': '200px',
                        height: '200px',
                        'margin-bottom': '30px',
                        position: 'fixed',
                        left: '24px',
                        top: '80px'
                    }))
                ),
                query(':leave',
                    animate('0.5s ease',
                        style({
                            transform: 'translateY(400px) scale(5)',
                            opacity: 0
                        })), { optional: true }),
            ]),
            group([
                query('.transition-right-to-left',
                    animate('0.5s ease')
                ),
                query('.transition-right-to-left-200',
                    animate('0.5s ease'), { optional: true }
                ),
                query('.transition-left-to-right',
                    animate('0.5s ease')
                ),
                query('.transition-top-to-bot-abs',
                    animate('1.5s ease'), { optional: true }
                ),
                query('.transition-bot-to-top-abs',
                    animate('0.5s ease'), { optional: true }
                ),
                query('.transition-left-to-right-abs',
                    animate('0.5s ease'), { optional: true }
                ),
                query('.progress-ring__circle',
                    animate('1.5s cubic-bezier(.88,.01,.56,1.01)'), { optional: true }
                ),
                query('.fade-in',
                    animate('0.5s ease',
                        style({
                            opacity: 1
                        }))
                ),
                query('.transition-scale-in-1',
                    animate('1.5s ease'), { optional: true }
                ),
                query('.transition-scale-in',
                    animate('0.5s ease'), { delay: '0.5s'}
                ),
            ])
        ])
    ]);